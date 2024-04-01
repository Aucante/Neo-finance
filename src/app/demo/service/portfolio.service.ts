import { Injectable } from '@angular/core';
import { FinancialResult } from "./financial-result.service";
import { MOCK_PORTFOLIO_1, MOCK_PORTFOLIO_2, MOCK_PORTFOLIO_3, MOCK_PORTFOLIOS } from "./mock/portfolio-mock";
import { Asset } from "../api/asset";

export interface PortfolioLine {
    id: number;
    quantity: number;
    value: number;
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

    getAllPortfoliosByUser(): Portfolio[] {
        return MOCK_PORTFOLIOS;
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
