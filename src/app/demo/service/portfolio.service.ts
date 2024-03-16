import { Injectable } from '@angular/core';
import { Portfolio } from "../api/portfolio";

@Injectable()
export class PortfolioService {

    getPortfolios(): Portfolio[] {
        return [];
    }
}
