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
import { Return } from "../../../api/return";
import { AssetService } from "../../../service/asset.service";
import { ReturnService } from "../../../service/return.service";
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-return-delete',
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
        NgIf
    ],
    templateUrl: './return-delete.component.html',
})
export class ReturnDeleteComponent implements OnInit {

    @Input() message: string = '';

    returns: Return[];

    selectedReturn: Return | undefined;

    constructor(
        private returnService: ReturnService
    ) { }

    ngOnInit() {
        this.returnService.getIncomes().subscribe(returnList => {
            this.returns = returnList;
        });
    }
}
