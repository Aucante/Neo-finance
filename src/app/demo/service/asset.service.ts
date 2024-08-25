import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Asset } from "../api/asset";
import { environment } from "../../../environments/environment";

@Injectable()
export class AssetService {

    constructor(private httpClient: HttpClient) { }

    getAssets(): Observable<Asset[]> {

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        });

        const url = `${environment.apiBaseUrl}assets`;

        return this.httpClient.get<any[]>(
            url,
            { headers }
        ).pipe(
            tap((response) =>
                console.table(response)
            ),
            catchError((error) => {
                console.log(error)
                return of([]);
            })
        )
    }
}
