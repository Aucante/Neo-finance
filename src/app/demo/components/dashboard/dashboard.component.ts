import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime, of } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ChartHelper } from "../../helper/chart-helper";
import { FinancialResult } from "../../service/financial-result.service";
import { AssetApiService } from "../../service/api/asset-api.service";
import { Asset } from "../../service/portfolio.service";
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

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    assetSelected: Asset;

    assets!: Asset[];

    private assetDataCache: Map<string, any> = new Map<string, any>();

    constructor(
        private productService: ProductService,
        private assetApiService: AssetApiService,
        private assetService: AssetService,
    ) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);
        this.assets = this.assetService.getAssets();
        this.getAssetData(this.assets[0]);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    getAssetData(asset: Asset): any {

        this.assetSelected = asset;
        const cachedAssetData = this.assetDataCache.get(this.assetSelected.abbreviation);

        if (cachedAssetData) {
            this.handleAssetDatas(cachedAssetData)
        } else {
            return this.assetApiService.getAssetDataTimeSeries('DIGITAL_CURRENCY_DAILY', asset.abbreviation, 'USD')
                .subscribe(data => {
                    const response = data["Time Series (Digital Currency Daily)"];
                    const responseAsset = Object.entries(response).map(([date, data]) => ({
                        date,
                        openValue: data["1a. open (USD)"]
                    }));

                    this.handleAssetDatas(responseAsset)
                });
        }
    }

    handleAssetDatas(responseAsset: responseAssetApiData[]): void {
        this.assetSelected.lastValue = parseFloat(responseAsset[0].openValue);
        this.setChartDataOption(responseAsset);
        this.assetDataCache.set(this.assetSelected.abbreviation, responseAsset);
    }

    setChartDataOption(dateAndOpenValue: responseAssetApiData[]): void {
        const chartLabels: string[] = dateAndOpenValue.reverse().map(value => ChartHelper.formatDate(value.date));
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
