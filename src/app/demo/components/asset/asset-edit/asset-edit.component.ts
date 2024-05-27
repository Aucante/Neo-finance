import { Component, OnInit } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { AssetService } from "../../../service/asset.service";
import { Asset } from "../../../api/asset";

@Component({
    selector: 'app-portfolio-edit',
    standalone: true,
    imports: [
        ButtonModule,
        DropdownModule,
        InputTextModule,
        FormsModule,
        NgIf
    ],
    templateUrl: './asset-edit.component.html',
})
export class AssetEditComponent implements OnInit {

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
