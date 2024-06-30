import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Return } from "../api/return";

@Injectable()
export class ReturnService {

    constructor(private httpClient: HttpClient) { }

    getIncomes(): Observable<Return[]> {
        return this.httpClient.get<Return[]>('api/incomes')
            .pipe(
                tap((response) => console.table(response)),
                catchError(() => {
                    return of([]);
                })
            )
    }
}
