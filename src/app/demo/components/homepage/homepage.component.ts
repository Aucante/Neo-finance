import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Asset } from "../../api/asset";
import { AssetService } from "../../service/asset.service";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { FinancialResult, FinancialResultService } from "../../service/financial-result.service";
import { ChartHelper } from "../../helper/chart-helper";
import { AssetApiService } from "../../service/api/asset-api.service";

@Component({
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit, OnDestroy{

    assets!: Asset[];

    portfolios!: Portfolio[];

    financialResults!: FinancialResult[];

    paginator!: number;

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    assetData: any;

    constructor(
        private assetService: AssetService,
        private portfolioService: PortfolioService,
        private financialResultService: FinancialResultService,
        private assetApiService: AssetApiService
    ) { }

    ngOnInit() {
        this.financialResults = this.financialResultService.getLastYearFinancialResultsByUser();
        this.getAssetData();
        this.assets = this.assetService.getAssets();
        this.portfolios = this.portfolioService.getAllPortfoliosByUser();
    }

    getAssetData(): any {
        return this.assetApiService.getAssetData('DIGITAL_CURRENCY_WEEKLY', 'ETH', 'USD')
            .subscribe(data => {
                this.assetData = data;

                // console.log(this.assetData["Time Series (Digital Currency Monthly)"])

                const response = this.assetData["Time Series (Digital Currency Weekly)"];

                const dateAndOpenValue = Object.entries(response).map(([date, data]) => ({
                    date,
                    openValue: data["1a. open (USD)"]
                }));

                console.log(dateAndOpenValue);
                console.log(this.financialResults)

                // const chartLabels = this.financialResults.map(financialResult => financialResult.month);
                // const chartDatas = this.financialResults.map(financialResult => financialResult.value);
                const chartLabels = dateAndOpenValue.map(value => value.date);
                const chartDatas = dateAndOpenValue.map(value => value.openValue);
                this.chartOptions = ChartHelper.initChart(chartLabels, chartDatas)[0];
                this.chartData = ChartHelper.initChart(chartLabels, chartDatas)[1];
            });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
