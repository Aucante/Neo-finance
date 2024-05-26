import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { ActivatedRoute } from "@angular/router";
import { ChartHelper } from "../../helper/chart-helper";
import { MenuItem } from "primeng/api";

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit, OnDestroy{

    portfolios!: Portfolio[];

    expandedRows: expandedRows = {};

    isExpanded: boolean = false;

    subscription!: Subscription;

    routeItems: MenuItem[] = [];


    constructor(
        private portfolioService: PortfolioService,
    ) { }

    ngOnInit() {

        this.routeItems = [
            { label: 'New', routerLink: 'add-portfolio' },
            { label: 'Add line', routerLink: 'add-portfolio-line' },
            { label: 'Edit', routerLink: 'edit-portfolio' },
            { label: 'Delete', routerLink: 'delete-portfolio' },
        ];

        this.portfolioService.getAllPortfoliosByUser().subscribe(portfolioList => {
            this.portfolios = portfolioList;
        });

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
