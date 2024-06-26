import { Component, OnInit } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { Transaction } from "../../../api/transaction";
import { TransactionService } from "../../../service/transaction.service";

@Component({
    selector: 'app-transaction-edit',
    standalone: true,
    imports: [
        ButtonModule,
        DropdownModule,
        InputTextModule,
        FormsModule,
        NgIf
    ],
    templateUrl: './transaction-edit.component.html',
})
export class TransactionEditComponent implements OnInit {

    transactions: Transaction[];

    selectedTransaction: Transaction | undefined;

    constructor(
        private transactionService: TransactionService
    ) { }

    ngOnInit() {
        this.transactionService.getAllTransactionsByPortfolio().subscribe(transactionList => {
            this.transactions = transactionList;
        })
    }

}
