import { Component, OnInit } from '@angular/core';
import { Portfolio, PortfolioService } from "../../../service/portfolio.service";

@Component({
    templateUrl: './portfolio-line-form.component.html'
})
export class PortfolioLineFormComponent implements OnInit {

    portfolios: Portfolio[];

    selectedPortfolio: Portfolio;

    constructor(
        private portfolioService: PortfolioService
    ) { }

    ngOnInit() {
        this.portfolioService.getAllPortfoliosByUser().subscribe(portfolioList => {
            this.portfolios = portfolioList;
        });
    }
}
