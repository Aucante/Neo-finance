import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from "../../service/portfolio.service";


@NgModule({
    imports: [RouterModule.forChild(
        PortfolioRoutingModule.createRoutes()
    )],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {

    constructor(private portfolioService: PortfolioService) {}

    private static createRoutes(): Routes {
        // const routes: Routes = [];
        // const portfolios = portfolioService.getAllPortfoliosByUser();
        //
        // portfolios.forEach(portfolio => {
        //     routes.push({ path: ':id', component: PortfolioComponent });
        // });

        return undefined;
    }
}
