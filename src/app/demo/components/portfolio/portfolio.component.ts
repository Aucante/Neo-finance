import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { ActivatedRoute } from "@angular/router";
import { ChartHelper } from "../../helper/chart-helper";

@Component({
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy{

    portfolioId: string;

    portfolio!: Portfolio;

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(
        private portfolioService: PortfolioService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const portfolios = this.portfolioService.getAllPortfoliosByUser();

        this.route.paramMap.subscribe(params => {
            this.portfolioId = params.get('id');

            if ('1' === this.portfolioId) {
                this.portfolio = this.portfolioService.getPortfolio1();
            } else if ('2' === this.portfolioId) {
                this.portfolio = this.portfolioService.getPortfolio2();
            } else {
                this.portfolio = this.portfolioService.getPortfolio3();
            }

            const chartLabels = this.portfolio.financialResults.map(financialResult => financialResult.month);
            const chartDatas = this.portfolio.financialResults.map(financialResult => financialResult.value);

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
