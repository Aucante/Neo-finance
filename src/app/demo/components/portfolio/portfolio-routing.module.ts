import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioCreateComponent } from "./portfolio-create/portfolio-create.component";
import { PortfolioEditComponent } from "./portfolio-edit/portfolio-edit.component";
import { PortfolioDeleteComponent } from "./portfolio-delete/portfolio-delete.component";
import { PortfolioLineFormComponent } from "./form/portfolio-line-form.component";


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
                    { path: 'add-portfolio-line', component: PortfolioLineFormComponent },
                    { path: 'add-portfolio', component: PortfolioCreateComponent },
                    { path: 'edit-portfolio', component: PortfolioEditComponent },
                    { path: 'delete-portfolio', component: PortfolioDeleteComponent },
                ]
            }
        ];
    }
}
