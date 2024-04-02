import { Injectable } from '@angular/core';
import { Asset } from "../api/asset";
import { MOCK_PORTFOLIO_LINES } from "./mock/portfolio-line-mock";

interface PortfolioLine {
    id: number;
    quantity: number;
    value: number;
    asset: Asset;
}

@Injectable()
export class PortfolioLineService {

    getPortfolioLines(): PortfolioLine[] {
        return MOCK_PORTFOLIO_LINES;
    }
}
