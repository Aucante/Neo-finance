import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartHelper } from "../../helper/chart-helper";
import {
    AssetApiService,
    MARKET_USD,
    REQUEST_DIGITAL_CURRENCY_DAILY,
    RESPONSE_DATA_KEY, RESPONSE_VALUES_KEY
} from "../../service/api/asset-api.service";
import { Asset } from "../../api/asset";
import { AssetService } from "../../service/asset.service";
import { ChartData, ChartOptions } from "chart.js";

interface responseAssetApiData {
    date: string,
    openValue: string
}

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    assetSelected: Asset;

    assets!: Asset[];

    private assetDataCache: Map<string, any> = new Map<string, any>();

    constructor(
        private assetApiService: AssetApiService,
        private assetService: AssetService,
    ) { }

    ngOnInit() {
        this.assets = this.assetService.getAssets();
        this.getAssetData(this.assets[0]);
    }

    getAssetData(asset: Asset): any {
        this.assetSelected = asset;
        const cachedAssetData = this.assetDataCache.get(this.assetSelected.abbreviation);

        if (cachedAssetData) {
            this.handleAssetDatas(cachedAssetData)
        } else {
            return this.assetApiService.getAssetDataTimeSeries(REQUEST_DIGITAL_CURRENCY_DAILY, asset.abbreviation, MARKET_USD)
                .subscribe(data => {
                    const response = data[RESPONSE_DATA_KEY];
                    const responseAsset = Object.entries(response).map(([date, data]) => ({
                        date,
                        openValue: data[RESPONSE_VALUES_KEY]
                    }));

                    this.handleAssetDatas(responseAsset.reverse())
                });
        }
    }

    handleAssetDatas(responseAsset: responseAssetApiData[]): void {
        this.assetSelected.lastValue = parseFloat(responseAsset[responseAsset.length - 1].openValue);
        this.setChartDataOption(responseAsset);
        this.assetDataCache.set(this.assetSelected.abbreviation, responseAsset);
    }

    setChartDataOption(dateAndOpenValue: responseAssetApiData[]): void {
        const chartLabels: string[] = dateAndOpenValue.map(value => ChartHelper.formatDate(value.date));
        const chartDatas: number[] = dateAndOpenValue.map(value => parseFloat(value.openValue));
        const chartValues: [ChartOptions, ChartData] = ChartHelper.initChart(chartLabels, chartDatas);
        this.chartOptions = chartValues[0];
        this.chartData = chartValues[1];
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
