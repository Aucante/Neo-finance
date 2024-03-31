import { Component } from '@angular/core';
import { TabViewModule } from "primeng/tabview";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { CurrencyPipe, DatePipe, LowerCasePipe, NgForOf, NgIf } from "@angular/common";
import { IconHelper } from "../../helper/icon-helper";
import { TableModule } from "primeng/table";
import { ChartModule } from "primeng/chart";
import { ChartHelper } from "../../helper/chart-helper";
import { DividerModule } from "primeng/divider";
import { ScrollPanelModule } from "primeng/scrollpanel";

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
export class PortfolioDashboardComponent {

    portfolios!: Portfolio[];

    chartData: any;

    chartOptions: any;

    constructor(
        private portfolioService: PortfolioService
    ) { }

    ngOnInit() {
        this.portfolios = this.portfolioService.getAllPortfoliosByUser();
        this.initChart(this.portfolios[0])
    }

    onTabChange(event: any) {
        const portfolioId: number = event.index;
        const selectedPortfolio: Portfolio = this.portfolios[portfolioId];

        if (selectedPortfolio) {
            this.initChart(selectedPortfolio);
        }
    }

    initChart(portfolio: Portfolio) {
        const chartLabels = portfolio.financialResults.map(financialResult => financialResult.month);
        const chartDatas = portfolio.financialResults.map(financialResult => financialResult.value);

        this.chartOptions = ChartHelper.initChart(chartLabels, chartDatas)[0];
        this.chartData = ChartHelper.initChart(chartLabels, chartDatas)[1];
    }

    getIconByPortfolio(type: string): string {
        return IconHelper.getIcon(type);
    }

    ngOnDestroy() { }
}
