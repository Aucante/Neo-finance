import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Transaction } from "../api/transaction";

@Injectable()
export class TransactionService {

    constructor(private httpClient: HttpClient) {
    }

    getAllTransactionsByPortfolio(): Observable<Transaction[]> {
        return this.httpClient.get<Transaction[]>('api/transactions')
            .pipe(
                tap((response) => console.table(response)),
                catchError(() => {
                    return of([]);
                })
            )
    }

}
