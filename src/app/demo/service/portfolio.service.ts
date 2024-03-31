import { Injectable } from '@angular/core';
import { FinancialResult, FinancialResultService } from "./financial-result.service";

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
    lastUpdateDate: Date;
    createdAt: Date;
    updatedAt: Date;
    financialResults: FinancialResult[];
}

@Injectable()
export class PortfolioService {

    getAllPortfoliosByUser(): Portfolio[] {
        return [
            {
                "id": 4,
                "name": "Cryptocurrencies Portfolio 1",
                "type": "Cryptocurrency",
                "value": 5000,
                "lastUpdateDate": new Date(),
                "createdAt": new Date(new Date().getFullYear(), 2, 10, 14, 0, 0, 0),
                "updatedAt": new Date(),
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
                ],
                "financialResults": this.getLastYearFinancialResultsByUser(1.1)
            },
            {
                "id": 2,
                "name": "Stocks Portfolio 1",
                "type": "Stock",
                "value": 10000,
                "lastUpdateDate": new Date(),
                "createdAt": new Date(new Date().getFullYear(), 0, 10, 14, 0, 0, 0),
                "updatedAt": new Date(),
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
                ],
                "financialResults": this.getLastYearFinancialResultsByUser(1.2)
            },
            {
                "id": 3,
                "name": "Real Estate Portfolio 1",
                "type": "Real Estate",
                "value": 100000,
                "lastUpdateDate": new Date(),
                "createdAt": new Date(new Date().getFullYear(), 0, 10, 14, 0, 0, 0),
                "updatedAt": new Date(),
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
                ],
                "financialResults": this.getLastYearFinancialResultsByUser(1.3)
            }
        ];
    }

    getPortfolio1(): Portfolio {
        return {
            "id": 1,
            "name": "Cryptocurrencies Portfolio 1",
            "type": "Cryptocurrency",
            "value": 5000,
            "lastUpdateDate": new Date(),
            "createdAt": new Date(new Date().getFullYear(), 2, 10, 14, 0, 0, 0),
            "updatedAt": new Date(),
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
            ],
            "financialResults": this.getLastYearFinancialResultsByUser(1.1)
        };
    }

    getPortfolio2(): Portfolio {
        return  {
            "id": 2,
            "name": "Stocks Portfolio 1",
            "type": "Stock",
            "value": 10000,
            "lastUpdateDate": new Date(),
            "createdAt": new Date(new Date().getFullYear(), 0, 10, 14, 0, 0, 0),
            "updatedAt": new Date(),
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
            ],
            "financialResults": this.getLastYearFinancialResultsByUser(1.2)
        };
    }

    getPortfolio3(): Portfolio {
        return     {
            "id": 3,
            "name": "Real Estate Portfolio 1",
            "type": "Real Estate",
            "value": 100000,
            "lastUpdateDate": new Date(),
            "createdAt": new Date(new Date().getFullYear(), 0, 10, 14, 0, 0, 0),
            "updatedAt": new Date(),
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
            ],
            "financialResults": this.getLastYearFinancialResultsByUser(1.3)
        };
    }

    getLastYearFinancialResultsByUser(coef: number): FinancialResult[] {

        const financialResults = [
            {
                "id": 1,
                "value": 1000 * coef,
                "month": "sep",
                "year": 2023
            },
            {
                "id": 2,
                "value": 4000 * coef,
                "month": "oct",
                "year": 2023
            },
            {
                "id": 3,
                "value": 14000 * coef,
                "month": "nov",
                "year": 2023
            },
            {
                "id": 4,
                "value": 20000 * coef,
                "month": "dec",
                "year": 2023
            },
            {
                "id": 5,
                "value": 35000 * coef,
                "month": "jan",
                "year": 2024
            },
            {
                "id": 1,
                "value": 10000 * coef,
                "month": "feb",
                "year": 2023
            },
            {
                "id": 2,
                "value": 24000 * coef,
                "month": "mar",
                "year": 2023
            },
            {
                "id": 3,
                "value": 14000 * coef,
                "month": "apr",
                "year": 2023
            },
            {
                "id": 4,
                "value": 20000 * coef,
                "month": "may",
                "year": 2023
            },
            {
                "id": 5,
                "value": 35000 * coef,
                "month": "jun",
                "year": 2024
            },
            {
                "id": 1,
                "value":30000 * coef,
                "month": "jul",
                "year": 2023
            },
            {
                "id": 2,
                "value": 45000 * coef,
                "month": "aug",
                "year": 2023
            },
            {
                "id": 3,
                "value": 44000 * coef,
                "month": "sep",
                "year": 2023
            },
            {
                "id": 4,
                "value": 75000 * coef,
                "month": "oct",
                "year": 2023
            },
            {
                "id": 5,
                "value": 135000 * coef,
                "month": "nov",
                "year": 2024
            },
        ];

        return financialResults.slice(0, 12);
    }
}
