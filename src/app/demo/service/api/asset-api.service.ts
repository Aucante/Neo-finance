import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from "../../../../environments/config";

export const REQUEST_DIGITAL_CURRENCY_DAILY = 'DIGITAL_CURRENCY_DAILY';
export const MARKET_USD = 'USD';
export const RESPONSE_DATA_KEY = 'Time Series (Digital Currency Daily)';
export const RESPONSE_VALUES_KEY = '1a. open (USD)';

@Injectable({
    providedIn: 'root'
})
export class AssetApiService {

    constructor(private http: HttpClient) { }

    getAssetDataTimeSeries(assetFunction: string, symbol: string, market: string): Observable<any> {

        const apiUrl = `https://alpha-vantage.p.rapidapi.com/query?function=${assetFunction}&symbol=${symbol}&market=${market}`;
        const headers = new HttpHeaders().set('X-RapidAPI-Key', config.apiKey).set('X-RapidAPI-Host', config.apiHost);
        const options = {
            headers: headers
        };

        return this.http.get<any>(apiUrl, options);
    }
}
