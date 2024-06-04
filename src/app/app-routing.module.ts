import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'homepage', loadChildren: () => import('./demo/components/homepage/homepage.module').then(m => m.HomepageModule) },
                    { path: 'portfolio', loadChildren: () => import('./demo/components/portfolio/portfolio.module').then(m => m.PortfolioModule) },
                    { path: 'asset', loadChildren: () => import('./demo/components/asset/asset.module').then(m => m.AssetModule) },
                    { path: 'transaction', loadChildren: () => import('./demo/components/transaction/transaction.module').then(m => m.TransactionModule) },
                    { path: 'portfolio-dashboard', loadChildren: () => import('./demo/components/portfolio-dashboard/portfolio-dashboard.module').then(m => m.PortfolioDashboardModule) },
                    { path: 'settings', loadChildren: () => import('./demo/components/setting/setting.module').then(m => m.SettingModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
