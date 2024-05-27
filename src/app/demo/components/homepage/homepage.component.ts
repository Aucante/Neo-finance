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

    portfolios: Portfolio[] = [];

    financialResults!: FinancialResult[];

    paginator!: number;

    chartData: any;

    chartOptions: any;

    pieChartData: any;

    pieChartOptions: any;


    subscription!: Subscription;
    constructor(
        private assetService: AssetService,
        private portfolioService: PortfolioService,
        private financialResultService: FinancialResultService
    ) { }

    ngOnInit() {
        this.financialResults = this.financialResultService.getLastYearFinancialResultsByUser();

        const chartLabels: string[] = this.financialResults.map(financialResult => financialResult.month);
        const chartDatas: number[] = this.financialResults.map(financialResult => financialResult.value);
        const chartResults: [ChartOptions: any, ChartData: any] = ChartHelper.initChart(chartLabels, chartDatas);

        this.chartOptions = chartResults[0];
        this.chartData = chartResults[1];

        this.assetService.getAssets().subscribe(assetList => {
            this.assets = assetList;
        });
        this.portfolioService.getAllPortfoliosByUser().subscribe(portfolioList => {
            this.portfolios = portfolioList;
            const pieChartLabels = this.portfolios.map(portfolio => portfolio.type);
            const pieChartDatas = this.portfolios.map(portfolio => portfolio.value);
            const pieChartResults: [ChartOptions: any, ChartData: any] = ChartHelper.initPieChart(pieChartLabels, pieChartDatas);
            this.pieChartOptions = pieChartResults[0];
            this.pieChartData = pieChartResults[1];
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
