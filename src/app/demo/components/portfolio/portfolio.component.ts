import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Asset } from "../../api/asset";

@Component({
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy{

    assets!: Asset[];

    paginator!: number;

    subscription!: Subscription;

    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
