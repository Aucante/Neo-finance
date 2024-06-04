import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { PORTFOLIO_TYPES } from "../../constants/app.constants";
import { FormsModule } from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";
import { SelectButtonModule } from "primeng/selectbutton";
import { CalendarModule } from "primeng/calendar";

@Component({
    selector: 'app-transaction-create',
    standalone: true,
    imports: [
        RouterOutlet,
        StepsModule,
        TabMenuModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        FormsModule,
        InputTextareaModule,
        SelectButtonModule,
        CalendarModule
    ],
    templateUrl: './transaction-create.component.html',
})
export class TransactionCreateComponent implements OnInit {

    stateOptions: any[] = [{ label: 'Purchased', value: 'purchased' },{ label: 'Sold', value: 'sold' }];

    date: Date | undefined;

    ngOnInit() {
    }
}
