import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { Portfolio, PortfolioService } from "../../service/portfolio.service";
import { SlugHelper } from "../../helper/SlugHelper";


@NgModule({
    imports: [RouterModule.forChild(
        PortfolioRoutingModule.createRoutes(new PortfolioService())
    )],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {

    constructor(private portfolioService: PortfolioService) {}

    private static createRoutes(portfolioService: PortfolioService): Routes {
        const routes: Routes = [];
        const portfolios = portfolioService.getAllPortfoliosByUser();

        portfolios.forEach(portfolio => {
            const slug = SlugHelper.slugify(portfolio.name);
            routes.push({ path: slug, component: PortfolioComponent });
        });

        return routes;
    }
}
