import { Component, OnInit } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { Portfolio, PortfolioService } from "../../../service/portfolio.service";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-portfolio-edit',
  standalone: true,
    imports: [
        ButtonModule,
        DropdownModule,
        InputTextModule,
        FormsModule,
        NgIf
    ],
  templateUrl: './portfolio-edit.component.html',
})
export class PortfolioEditComponent implements OnInit{

    portfolios: Portfolio[];

    selectedPortfolio: Portfolio | undefined;

    constructor(
        private portfolioService: PortfolioService
    ) { }

    ngOnInit() {
        this.portfolioService.getAllPortfoliosByUser().subscribe(portfolioList => {
            this.portfolios = portfolioList;
        });
    }

}
