import { Component, OnDestroy, OnInit } from '@angular/core';
import { TabViewModule } from "primeng/tabview";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { CurrencyPipe, DatePipe, LowerCasePipe, NgForOf, NgIf } from "@angular/common";
import { IconHelper } from "../../helper/icon-helper";
import { TableModule } from "primeng/table";
import { ChartModule } from "primeng/chart";
import { ChartHelper } from "../../helper/chart-helper";
import { DividerModule } from "primeng/divider";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: 'app-portfolio-dashboard',
  standalone: true,
    imports: [
        TabViewModule,
        NgForOf,
        CurrencyPipe,
        LowerCasePipe,
        TableModule,
        ChartModule,
        NgIf,
        DatePipe,
        DividerModule,
        ScrollPanelModule,
        ButtonModule,
        DialogModule,
        InputTextModule
    ],
  templateUrl: './portfolio-dashboard.component.html',
})
export class PortfolioDashboardComponent implements OnInit, OnDestroy {

    portfolios!: Portfolio[];

    chartData: any;

    chartOptions: any;

    barData: any;

    barOptions: any;

    visible: boolean = false;

    constructor(
        private portfolioService: PortfolioService,
    ) { }

    ngOnInit() {
        this.portfolioService.getAllPortfoliosByUser().subscribe(portfolioList => {
            this.portfolios = portfolioList;
            this.initCharts(this.portfolios[0]);
        });
    }

    onTabChange(event: any) {
        const portfolioId: number = event.index;
        const selectedPortfolio: Portfolio = this.portfolios[portfolioId];

        if (selectedPortfolio) {
            this.initCharts(selectedPortfolio);
        }
    }

    showDialog() {
        this.visible = true;
    }

    initCharts(portfolio: Portfolio) {
        const chartLabels: string[] = portfolio.financialResults.map(financialResult => financialResult.month);
        const chartDatas: number[] = portfolio.financialResults.map(financialResult => financialResult.value);
        const chartResults: [ChartOptions: any, ChartData: any] = ChartHelper.initChart(chartLabels, chartDatas);
        const barChartResults: [ChartOptions: any, ChartData: any] = ChartHelper.initBarChart();

        this.chartOptions = chartResults[0];
        this.chartData = chartResults[1];
        this.barOptions = barChartResults[0];
        this.barData = barChartResults[1];
    }

    ngOnDestroy() { }
}
