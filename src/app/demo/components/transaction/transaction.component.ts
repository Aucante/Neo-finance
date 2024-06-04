import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { MenuItem } from "primeng/api";
import { Transaction } from "../../api/transaction";

@Component({
    templateUrl: './transaction.component.html',
})
export class TransactionComponent implements OnInit, OnDestroy {

    transactions!: Transaction[];

    subscription!: Subscription;

    routeItems: MenuItem[] = [];


    constructor(
        // private transactionService: TransactionService,
    ) { }

    ngOnInit() {

        this.routeItems = [
            { label: 'New', routerLink: 'add-transaction' },
            { label: 'Edit', routerLink: 'edit-transaction' },
            { label: 'Delete', routerLink: 'delete-transaction' },
        ];

        // this.portfolioService.getAllPortfoliosByUser().subscribe(portfolioList => {
        //     this.portfolios = portfolioList;
        // });

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
