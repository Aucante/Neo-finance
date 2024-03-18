import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy{

    portfolioId: string;

    portfolios!: Portfolio[];

    subscription!: Subscription;

    constructor(
        private portfolioService: PortfolioService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.portfolios = this.portfolioService.getAllPortfoliosByUser();

        this.route.paramMap.subscribe(params => {
            this.portfolioId = params.get('id');
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
