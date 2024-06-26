import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { AssetService } from "./demo/service/asset.service";
import { PortfolioService } from "./demo/service/portfolio.service";
import { FinancialResultService } from "./demo/service/financial-result.service";
import { TransactionService } from "./demo/service/transaction.service";
import { ReturnService } from "./demo/service/return.service";

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        AssetService,
        ReturnService,
        PortfolioService,
        FinancialResultService,
        TransactionService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
