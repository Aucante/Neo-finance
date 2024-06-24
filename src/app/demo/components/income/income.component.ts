import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { MenuItem } from "primeng/api";

@Component({
    templateUrl: './income.component.html',
})
export class IncomeComponent implements OnInit, OnDestroy {

    subscription!: Subscription;

    routeItems: MenuItem[] = [];

    constructor(
    ) { }

    ngOnInit() {

        this.routeItems = [
            { label: 'New', routerLink: 'add-income' },
            { label: 'Edit', routerLink: 'edit-income' },
            { label: 'Delete', routerLink: 'delete-income' },
        ];

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
