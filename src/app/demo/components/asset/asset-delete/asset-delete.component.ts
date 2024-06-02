import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { Asset } from "../../../api/asset";
import { AssetService } from "../../../service/asset.service";

@Component({
    selector: 'app-asset-create',
    standalone: true,
    imports: [
        RouterOutlet,
        StepsModule,
        TabMenuModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        FormsModule
    ],
    templateUrl: './asset-delete.component.html',
})
export class AssetDeleteComponent implements OnInit {

    assets: Asset[];

    selectedAsset: Asset | undefined;

    constructor(
        private assetService: AssetService
    ) { }

    ngOnInit() {
        this.assetService.getAssets().subscribe(assetList => {
            this.assets = assetList;
        });
    }

}
