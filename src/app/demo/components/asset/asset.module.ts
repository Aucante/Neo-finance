import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChartModule } from "primeng/chart";
import { MenuModule } from "primeng/menu";
import { TableModule } from "primeng/table";
import { StyleClassModule } from "primeng/styleclass";
import { PanelMenuModule } from "primeng/panelmenu";
import { ButtonModule } from "primeng/button";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { ToastModule } from "primeng/toast";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { AssetComponent } from "./asset.component";
import { AssetRoutingModule } from "./asset-routing.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        AssetRoutingModule,
        RatingModule,
        RippleModule,
        ToastModule,
        StepsModule,
        TabMenuModule,
        ChipsModule,
        DropdownModule
    ],
    declarations: [
        AssetComponent
    ]
})
export class AssetModule { }
