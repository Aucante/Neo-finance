import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from "../../../../environments/config";

@Injectable({
    providedIn: 'root'
})
export class AssetApiService {

    constructor(private http: HttpClient) { }

    getAssetData(assetFunction: string, symbol: string, market: string): Observable<any> {

        const apiUrl = `https://alpha-vantage.p.rapidapi.com/query?function=${assetFunction}&symbol=${symbol}&market=${market}`;
        const headers = new HttpHeaders().set('X-RapidAPI-Key', config.apiKey).set('X-RapidAPI-Host', config.apiHost);
        const options = {
            headers: headers
        };

        return this.http.get<any>(apiUrl, options);
    }
}
