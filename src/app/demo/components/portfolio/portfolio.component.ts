import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy{

    portfolioId: string;

    portfolio!: Portfolio;

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
        });


    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
