import { Injectable } from '@angular/core';
import { FinancialResult } from "./financial-result.service";
import { MOCK_PORTFOLIO_1, MOCK_PORTFOLIO_2, MOCK_PORTFOLIO_3, MOCK_PORTFOLIOS } from "./mock/portfolio-mock";
import { Asset } from "../api/asset";
import { catchError, Observable, of, tap } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

export interface PortfolioLine {
    id: number;
    quantity: number;
    asset: Asset;
}

export interface Portfolio {
    id: number;
    name: string;
    type: string;
    value: number;
    portfolioLines: PortfolioLine[];
    lastUpdateDate: Date;
    createdAt: Date;
    updatedAt: Date;
    financialResults: FinancialResult[];
}

@Injectable()
export class PortfolioService {

    constructor(private httpClient: HttpClient) { }

    getAllPortfoliosByUser(): Observable<Portfolio[]> {
        return this.httpClient.get<Portfolio[]>('api/portfolios')
            .pipe(
                tap((response) => console.table(response)),
                catchError(() => {
                    return of([]);
                })
            )
    }

    getAllPortfolios(): Observable<Portfolio[]> {

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        });

        return this.httpClient.get<any[]>(
            `${environment.apiBaseUrl}portfolios`,
            { headers }
        )
    }

    getPortfolio1(): Portfolio {
        return MOCK_PORTFOLIO_1;
    }

    getPortfolio2(): Portfolio {
        return MOCK_PORTFOLIO_2;
    }

    getPortfolio3(): Portfolio {
        return MOCK_PORTFOLIO_3;
    }
}
