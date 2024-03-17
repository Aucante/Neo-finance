import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Asset } from "../../api/asset";
import { AssetService } from "../../service/asset.service";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";

@Component({
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit, OnDestroy{

    assets!: Asset[];

    portfolios!: Portfolio[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(private assetService: AssetService, private portfolioService: PortfolioService) {
    }

    ngOnInit() {
        this.initChart();

        this.assets = this.assetService.getAssets();
        this.portfolios = this.portfolioService.getAllPortfoliosByUser();
        console.log(this.assets)
        console.log(this.portfolios)
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            datasets: [
                {
                    label: 'BTC',
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
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
                    labels: {
                        color: textColor
                    }
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
