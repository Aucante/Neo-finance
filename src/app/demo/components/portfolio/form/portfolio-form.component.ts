import { Component, OnInit } from '@angular/core';
import { PORTFOLIO_TYPES } from "../../constants/app.constants";

@Component({
    templateUrl: './portfolio-form.component.html'
})
export class PortfolioFormComponent implements OnInit{

    cities: string[] | undefined;

    selectedCity: string | undefined;

    ngOnInit() {
        this.cities = PORTFOLIO_TYPES;
    }
}
