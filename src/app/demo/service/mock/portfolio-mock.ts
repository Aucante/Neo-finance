import { Portfolio } from '../portfolio.service';
import { MOCK_FINANCIAL_RESULTS } from "./financial-result-mock";
import { FinancialResult } from "../financial-result.service";

export const MOCK_PORTFOLIOS: Portfolio[] = [
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
        "financialResults": getLastYearFinancialResultsByUser()
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
        "financialResults": getLastYearFinancialResultsByUser()
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
        "financialResults": getLastYearFinancialResultsByUser()
    }
];

export const MOCK_PORTFOLIO_1: Portfolio = {
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
    "financialResults": getLastYearFinancialResultsByUser()
};

export const MOCK_PORTFOLIO_2: Portfolio = {
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
    "financialResults": getLastYearFinancialResultsByUser()
};

export const MOCK_PORTFOLIO_3: Portfolio = {
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
    "financialResults": getLastYearFinancialResultsByUser()
};

function getLastYearFinancialResultsByUser(): FinancialResult[] {
    return MOCK_FINANCIAL_RESULTS.slice(0, 12);
}