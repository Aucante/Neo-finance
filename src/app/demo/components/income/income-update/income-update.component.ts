import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";
import { SelectButtonModule } from "primeng/selectbutton";
import { CalendarModule } from "primeng/calendar";
import { ReturnCreateComponent } from "../../return/return-create/return-create.component";
import { ReturnUpdateComponent } from "../../return/return-update/return-update.component";

@Component({
    selector: 'app-income-update',
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
        CalendarModule,
        ReturnUpdateComponent,
        ReturnCreateComponent
    ],
    templateUrl: './income-update.component.html',
})
export class IncomeUpdateComponent implements OnInit {

    message: string = "Income update";

    ngOnInit() { }
}
