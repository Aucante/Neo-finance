import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioCreateComponent } from "./portfolio-create/portfolio-create.component";
import { PortfolioEditComponent } from "./portfolio-edit/portfolio-edit.component";
import { PortfolioDeleteComponent } from "./portfolio-delete/portfolio-delete.component";
import { PortfolioLineFormComponent } from "./form/portfolio-line-form.component";
import { PortfolioFormComponent } from "./form/portfolio-form.component";
import { ConfirmationComponent } from "./form/confirmation.component";


@NgModule({
    imports: [RouterModule.forChild(
        PortfolioRoutingModule.createRoutes()
    )],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {

    private static createRoutes(): Routes {
        return [
            {
                path: '', component: PortfolioComponent, children: [
                    { path: '', redirectTo: 'personal', pathMatch: 'full' },
                    { path: 'create', component: PortfolioCreateComponent },
                    { path: 'edit', component: PortfolioEditComponent },
                    { path: 'delete', component: PortfolioDeleteComponent },
                    { path: 'add-portfolio-line', component: PortfolioLineFormComponent },
                    { path: 'add-portfolio', component: PortfolioFormComponent },
                    { path: 'confirmation', component: ConfirmationComponent },
                ]
            }
        ];
    }
}
