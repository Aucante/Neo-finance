import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { PORTFOLIO_TYPES } from "../../constants/app.constants";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-portfolio-create',
  standalone: true,
    imports: [
        RouterOutlet,
        StepsModule,
        TabMenuModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        FormsModule
    ],
  templateUrl: './portfolio-create.component.html',
})
export class PortfolioCreateComponent implements OnInit{

    types: string[] | undefined;

    selectedType: string | undefined;

    ngOnInit() {
        this.types = PORTFOLIO_TYPES;
    }
}
