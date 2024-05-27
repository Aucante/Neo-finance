import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { MenuItem } from "primeng/api";

@Component({
    templateUrl: './asset.component.html',
})
export class AssetComponent implements OnInit, OnDestroy {

    subscription!: Subscription;

    routeItems: MenuItem[] = [];

    ngOnInit() {

        this.routeItems = [
            { label: 'New', routerLink: 'add-asset' },
        ];
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
