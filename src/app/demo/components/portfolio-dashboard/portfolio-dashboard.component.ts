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
import { LayoutService } from "../../../layout/service/app.layout.service";
import { debounceTime, Subscription } from "rxjs";

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
        ScrollPanelModule
    ],
  templateUrl: './portfolio-dashboard.component.html',
})
export class PortfolioDashboardComponent implements OnInit, OnDestroy {

    portfolios!: Portfolio[];

    chartData: any;

    chartOptions: any;

    barData: any;

    barOptions: any;

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

    initCharts(portfolio: Portfolio) {
        const chartLabels = portfolio.financialResults.map(financialResult => financialResult.month);
        const chartDatas = portfolio.financialResults.map(financialResult => financialResult.value);

        const chartResults = ChartHelper.initChart(chartLabels, chartDatas);
        const barChartResults = ChartHelper.initBarChart();

        this.chartOptions = chartResults[0];
        this.chartData = chartResults[1];
        this.barOptions = barChartResults[0];
        this.barData = barChartResults[1];
    }

    getIconByPortfolio(type: string): string {
        return IconHelper.getIcon(type);
    }

    ngOnDestroy() { }
}
