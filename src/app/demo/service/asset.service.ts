import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Asset } from "../api/asset";
import { MOCK_ASSETS } from "./mock/asset-mock";

@Injectable()
export class AssetService {

    constructor(private httpClient: HttpClient) {
    }
    getAssets(): Asset[] {
        return MOCK_ASSETS;
    }

    getAssetsTest(): Observable<Asset[]> {
        return this.httpClient.get<Asset[]>('api/assets')
            .pipe(
                tap((response) => console.table(response)),
                catchError((error) => {
                    console.log(error);
                    return of([]);
                })
            )
    }
}
