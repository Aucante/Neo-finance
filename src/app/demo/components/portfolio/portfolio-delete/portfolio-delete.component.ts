import { Component, OnInit } from '@angular/core';
import { Portfolio, PortfolioService } from "../../../service/portfolio.service";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { NgIf } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-portfolio-delete',
  standalone: true,
    imports: [
        ButtonModule,
        DropdownModule,
        InputTextModule,
        NgIf,
        ReactiveFormsModule,
        FormsModule
    ],
  templateUrl: './portfolio-delete.component.html',
})
export class PortfolioDeleteComponent implements OnInit{

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
