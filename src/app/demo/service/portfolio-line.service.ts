import { Injectable } from '@angular/core';
import { Asset } from "../api/asset";

interface PortfolioLine {
    id: number;
    quantity: number;
    value: number;
    asset: Asset;
}

@Injectable()
export class PortfolioLineService {

    getPortfolioLines(): PortfolioLine[] {

        return [
            {
                id: 1,
                quantity: 10,
                value: 1.50,
                asset: {
                    id: 1,
                    name: 'Bitcoin',
                    abbreviation: 'BTC',
                    color: 'cyan',
                    lastValue: 68000,
                },
            },
            {
                id: 2,
                quantity: 1,
                value: 400,
                asset: {
                    id: 3,
                    name: 'Ripple',
                    abbreviation: 'XRP',
                    color: 'cyan',
                    lastValue: 0.6,
                },
            },
        ];
    }
}
