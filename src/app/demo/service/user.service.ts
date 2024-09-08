import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export interface UserPortfolioDetails {
    userEmail: string;
    portfoliosDetails:PortfoliosDetails;
}

export interface PortfoliosDetails {
    portfolio: Portfolio;
    portfolioLines: PortfolioLine[];
}

export interface Portfolio {
    id: number;
    name: string;
    type: string;
    userId: number;
}

export interface PortfolioLine {
    id: number;
    quantity: number;
    assetId: number;
    portfolioId: number;
}


@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getUserFullPortfoliosDetails(): Observable<UserPortfolioDetails> {

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        });

        return this.httpClient.get<any>(
            `${environment.apiBaseUrl}users/1/full-portfolio-details`,
            { headers }
        )
    }

}
