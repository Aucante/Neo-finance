import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Asset } from "../api/asset";

@Injectable()
export class AssetService {

    constructor(private httpClient: HttpClient) { }

    getAssets(): Observable<Asset[]> {
        return this.httpClient.get<Asset[]>('api/assets')
            .pipe(
                tap((response) => console.table(response)),
                catchError(() => {
                    return of([]);
                })
            )
    }
}
