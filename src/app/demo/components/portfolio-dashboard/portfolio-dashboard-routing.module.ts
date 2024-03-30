import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioDashboardComponent } from "./portfolio-dashboard.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PortfolioDashboardComponent }
    ])],
    exports: [RouterModule]
})
export class PortfolioDashboardRoutingModule { }
