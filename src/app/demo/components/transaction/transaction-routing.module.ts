import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from "./transaction.component";
import { TransactionCreateComponent } from "./transaction-create/transaction-create.component";
import { TransactionEditComponent } from "./transaction-edit/transaction-edit.component";
import { TransactionDeleteComponent } from "./transaction-delete/transaction-delete.component";


@NgModule({
    imports: [RouterModule.forChild(
        TransactionRoutingModule.createRoutes()
    )],
    exports: [RouterModule]
})
export class TransactionRoutingModule {

    private static createRoutes(): Routes {
        return [
            {
                path: '', component: TransactionComponent, children: [
                    { path: '', redirectTo: 'personal', pathMatch: 'full' },
                    { path: 'add-transaction', component: TransactionCreateComponent },
                    { path: 'edit-transaction', component: TransactionEditComponent },
                    { path: 'delete-transaction', component: TransactionDeleteComponent },
                ]
            }
        ];
    }
}
