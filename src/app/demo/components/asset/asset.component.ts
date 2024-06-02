import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { MenuItem } from "primeng/api";
import { Asset } from "../../api/asset";
import { AssetService } from "../../service/asset.service";

@Component({
    templateUrl: './asset.component.html',
})
export class AssetComponent implements OnInit, OnDestroy {

    subscription!: Subscription;

    routeItems: MenuItem[] = [];

    assets: Asset[];

    constructor(
        private assetService: AssetService
    ) { }

    ngOnInit() {

        this.routeItems = [
            { label: 'New', routerLink: 'add-asset' },
            { label: 'Edit', routerLink: 'edit-asset' },
            { label: 'Delete', routerLink: 'delete-asset' },
        ];

        this.assetService.getAssets().subscribe(assetList => {
            this.assets = assetList;
        });

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
