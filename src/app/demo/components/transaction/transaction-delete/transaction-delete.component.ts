import { Component, OnInit } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { NgIf } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Transaction } from "../../../api/transaction";
import { TransactionService } from "../../../service/transaction.service";

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

    constructor(
        private transactionService: TransactionService
    ) { }

    ngOnInit() {
        this.transactionService.getAllTransactionsByPortfolio().subscribe(transactionList => {
            this.transactions = transactionList
            console.log(this.transactions)
        })
    }
}
