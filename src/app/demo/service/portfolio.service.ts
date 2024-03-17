import { Injectable } from '@angular/core';

export interface Asset {
    id: number;
    name: string;
    abbreviation: string;
    color: string;
    lastValue: number;
}

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
}

@Injectable()
export class PortfolioService {

    getAllPortfoliosByUser(): Portfolio[] {
        return [
            {
                "id": 1,
                "name": "Cryptocurrencies",
                "type": "Cryptocurrencies",
                "value": 5000,
                "portfolioLines": [
                    {
                        "id": 1,
                        "quantity": 10,
                        "value": 1.50,
                        "asset": {
                            "id": 1,
                            "name": "Bitcoin",
                            "abbreviation": "BTC",
                            "color": "cyan",
                            "lastValue": 68000,
                        }
                    },
                    {
                        "id": 2,
                        "quantity": 5,
                        "value": 0.80,
                        "asset": {
                            "id": 2,
                            "name": "Ethereum",
                            "abbreviation": "ETH",
                            "color": "orange",
                            "lastValue": 3500
                        }
                    },
                    {
                        "id": 6,
                        "quantity": 5,
                        "value": 0.80,
                        "asset": {
                            "id": 9,
                            "name": "Cardano",
                            "abbreviation": "ADA",
                            "color": "green",
                            "lastValue": 1
                        }
                    },
                    {
                        "id": 7,
                        "quantity": 14,
                        "value": 8,
                        "asset": {
                            "id": 6,
                            "name": "Polkadot",
                            "abbreviation": "DOT",
                            "color": "cyan",
                            "lastValue": 8
                        }
                    }
                ]
            },
            {
                "id": 2,
                "name": "Stocks",
                "type": "Stocks",
                "value": 10000,
                "portfolioLines": [
                    {
                        "id": 3,
                        "quantity": 20,
                        "value": 5.00,
                        "asset": {
                            "id": 3,
                            "name": "Apple Inc.",
                            "abbreviation": "AAPL",
                            "color": "green",
                            "lastValue": 150
                        }
                    },
                    {
                        "id": 4,
                        "quantity": 15,
                        "value": 3.50,
                        "asset": {
                            "id": 4,
                            "name": "Microsoft Corporation",
                            "abbreviation": "MSFT",
                            "color": "blue",
                            "lastValue": 200
                        }
                    }
                ]
            },
            {
                "id": 2,
                "name": "Real Estate",
                "type": "Real Estate",
                "value": 100000,
                "portfolioLines": [
                    {
                        "id": 5,
                        "quantity": 1,
                        "value": 100000,
                        "asset": {
                            "id": 4,
                            "name": "Real Estate - Nice",
                            "abbreviation": "RE",
                            "color": "green",
                            "lastValue": 100000
                        }
                    }
                ]
            }
        ];
    }
}
