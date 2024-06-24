import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from "./income.component";
import { IncomeCreateComponent } from "./income-create/income-create.component";


@NgModule({
    imports: [RouterModule.forChild(
        IncomeRoutingModule.createRoutes()
    )],
    exports: [RouterModule]
})
export class IncomeRoutingModule {

    private static createRoutes(): Routes {
        return [
            {
                path: '', component: IncomeComponent, children: [
                    { path: '', redirectTo: 'personal', pathMatch: 'full' },
                    { path: 'add-income', component: IncomeCreateComponent },
                    // { path: 'edit-transaction', component: TransactionEditComponent },
                    // { path: 'delete-transaction', component: TransactionDeleteComponent },
                ]
            }
        ];
    }
}
