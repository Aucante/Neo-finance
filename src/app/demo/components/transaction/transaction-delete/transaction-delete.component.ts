import { Component, OnInit } from '@angular/core';
import { Portfolio, PortfolioService } from "../../../service/portfolio.service";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { NgIf } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Transaction } from "../../../api/transaction";

@Component({
    selector: 'app-transaction-delete',
    standalone: true,
    imports: [
        ButtonModule,
        DropdownModule,
        InputTextModule,
        NgIf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './transaction-delete.component.html',
})
export class TransactionDeleteComponent implements OnInit{

    transactions: Transaction[];

    selectedTransaction: Transaction | undefined;

    ngOnInit() {
    }
}