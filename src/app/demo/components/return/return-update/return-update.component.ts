import { Component, Input, OnInit } from '@angular/core';
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

@Component({
    selector: 'app-return-update',
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
    templateUrl: './return-update.component.html',
})
export class ReturnUpdateComponent implements OnInit {

    @Input() message: string = '';

    ngOnInit() {
    }
}
