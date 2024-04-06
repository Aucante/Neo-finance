import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from "../../service/portfolio.service";
import { PortfolioCreateComponent } from "./portfolio-create/portfolio-create.component";
import { PortfolioEditComponent } from "./portfolio-edit/portfolio-edit.component";
import { PortfolioDeleteComponent } from "./portfolio-delete/portfolio-delete.component";


@NgModule({
    imports: [RouterModule.forChild(
        PortfolioRoutingModule.createRoutes()
    )],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {

    constructor(private portfolioService: PortfolioService) {}

    private static createRoutes(): Routes {
        // const portfolios = portfolioService.getAllPortfoliosByUser();
        //
        // portfolios.forEach(portfolio => {
        //     routes.push({ path: ':id', component: PortfolioComponent });
        // });

        return [
            { path: '', component: PortfolioComponent },
            { path: 'create', component: PortfolioCreateComponent },
            { path: 'edit', component: PortfolioEditComponent },
            { path: 'delete', component: PortfolioDeleteComponent },
        ];
    }
}
