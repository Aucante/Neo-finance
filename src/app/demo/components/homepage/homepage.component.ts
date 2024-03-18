import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Asset } from "../../api/asset";
import { AssetService } from "../../service/asset.service";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { FinancialResult, FinancialResultService } from "../../service/financial-result.service";
import {  } from "../../service/financial-result.service";

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
        this.initChart();
        this.assets = this.assetService.getAssets();
        this.portfolios = this.portfolioService.getAllPortfoliosByUser();
        console.log(this.financialResults.map(financialResult => financialResult.month));
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: this.financialResults.map(financialResult => financialResult.month),
            datasets: [
                {
                    label: '',
                    data: this.financialResults.map(financialResult => financialResult.value),
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .1
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
