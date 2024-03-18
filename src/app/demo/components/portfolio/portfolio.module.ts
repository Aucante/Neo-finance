import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from "./portfolio.component";
import { FormsModule } from "@angular/forms";
import { ChartModule } from "primeng/chart";
import { MenuModule } from "primeng/menu";
import { TableModule } from "primeng/table";
import { StyleClassModule } from "primeng/styleclass";
import { PanelMenuModule } from "primeng/panelmenu";
import { ButtonModule } from "primeng/button";
import { TotalValuePipe } from "../../pipe/total-value.pipe";
import { PortfolioRoutingModule } from "./portfolio-routing.module";


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
        PortfolioRoutingModule
    ],
    declarations: [
        PortfolioComponent,
        TotalValuePipe
    ]
})
export class PortfolioModule { }
