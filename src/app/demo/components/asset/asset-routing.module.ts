import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssetCreateComponent } from "../asset-create/asset-create.component";
import { AssetComponent } from "./asset.component";

@NgModule({
    imports: [RouterModule.forChild(
        AssetRoutingModule.createRoutes()
    )],
    exports: [RouterModule]
})
export class AssetRoutingModule {

    private static createRoutes(): Routes {
        return [
            {
                path: '', component: AssetComponent, children: [
                    { path: '', redirectTo: 'personal', pathMatch: 'full' },
                    { path: 'add-asset', component: AssetCreateComponent },
                ]
            }
        ];
    }
}
