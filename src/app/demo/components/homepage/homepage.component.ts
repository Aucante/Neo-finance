import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Asset } from "../../api/asset";
import { AssetService } from "../../service/asset.service";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { FinancialResult, FinancialResultService } from "../../service/financial-result.service";
import { ChartHelper } from "../../helper/chart-helper";

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

    constructor(
        private assetService: AssetService,
        private portfolioService: PortfolioService,
        private financialResultService: FinancialResultService
    ) { }

    ngOnInit() {
        this.financialResults = this.financialResultService.getLastYearFinancialResultsByUser();

        const chartLabels = this.financialResults.map(financialResult => financialResult.month);
        const chartDatas = this.financialResults.map(financialResult => financialResult.value);

        this.chartOptions = ChartHelper.initChart(chartLabels, chartDatas)[0];
        this.chartData = ChartHelper.initChart(chartLabels, chartDatas)[1];

        this.assets = this.assetService.getAssets();
        this.portfolios = this.portfolioService.getAllPortfoliosByUser();
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
