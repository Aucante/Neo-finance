import { Portfolio } from '../portfolio.service';
import {
    MOCK_FINANCIAL_RESULTS_1,
    MOCK_FINANCIAL_RESULTS_2,
    MOCK_FINANCIAL_RESULTS_3
} from "./financial-result-mock";
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
                "asset": {
                    "id": 1,
                    "name": "Bitcoin",
                    "abbreviation": "BTC",
                    "color": "cyan",
                    "value": 68000,
                }
            },
            {
                "id": 2,
                "quantity": 5,
                "asset": {
                    "id": 2,
                    "name": "Ethereum",
                    "abbreviation": "ETH",
                    "color": "orange",
                    "value": 3500
                }
            },
            {
                "id": 6,
                "quantity": 5,
                "asset": {
                    "id": 9,
                    "name": "Cardano",
                    "abbreviation": "ADA",
                    "color": "green",
                    "value": 1
                }
            },
            {
                "id": 7,
                "quantity": 14,
                "asset": {
                    "id": 6,
                    "name": "Polkadot",
                    "abbreviation": "DOT",
                    "color": "cyan",
                    "value": 8
                }
            }
        ],
        "financialResults": getLastYearFinancialResultsByPortofolio(MOCK_FINANCIAL_RESULTS_1)
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
                "asset": {
                    "id": 3,
                    "name": "Apple Inc.",
                    "abbreviation": "AAPL",
                    "color": "green",
                    "value": 150
                }
            },
            {
                "id": 4,
                "quantity": 15,
                "asset": {
                    "id": 4,
                    "name": "Microsoft Corporation",
                    "abbreviation": "MSFT",
                    "color": "blue",
                    "value": 200
                }
            }
        ],
        "financialResults": getLastYearFinancialResultsByPortofolio(MOCK_FINANCIAL_RESULTS_2)
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
                "asset": {
                    "id": 4,
                    "name": "Real Estate - Nice",
                    "abbreviation": "RE",
                    "color": "green",
                    "value": 100000
                }
            }
        ],
        "financialResults": getLastYearFinancialResultsByPortofolio(MOCK_FINANCIAL_RESULTS_3)
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
            "asset": {
                "id": 1,
                "name": "Bitcoin",
                "abbreviation": "BTC",
                "color": "cyan",
                "value": 68000,
            }
        },
        {
            "id": 2,
            "quantity": 5,
            "asset": {
                "id": 2,
                "name": "Ethereum",
                "abbreviation": "ETH",
                "color": "orange",
                "value": 3500
            }
        },
        {
            "id": 6,
            "quantity": 5,
            "asset": {
                "id": 9,
                "name": "Cardano",
                "abbreviation": "ADA",
                "color": "green",
                "value": 1
            }
        },
        {
            "id": 7,
            "quantity": 14,
            "asset": {
                "id": 6,
                "name": "Polkadot",
                "abbreviation": "DOT",
                "color": "cyan",
                "value": 8
            }
        }
    ],
    "financialResults": getLastYearFinancialResultsByPortofolio(MOCK_FINANCIAL_RESULTS_1)
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
            "asset": {
                "id": 3,
                "name": "Apple Inc.",
                "abbreviation": "AAPL",
                "color": "green",
                "value": 150
            }
        },
        {
            "id": 4,
            "quantity": 15,
            "asset": {
                "id": 4,
                "name": "Microsoft Corporation",
                "abbreviation": "MSFT",
                "color": "blue",
                "value": 200
            }
        }
    ],
    "financialResults": getLastYearFinancialResultsByPortofolio(MOCK_FINANCIAL_RESULTS_2)
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
            "asset": {
                "id": 4,
                "name": "Real Estate - Nice",
                "abbreviation": "RE",
                "color": "green",
                "value": 100000
            }
        }
    ],
    "financialResults": getLastYearFinancialResultsByPortofolio(MOCK_FINANCIAL_RESULTS_3)
};

function getLastYearFinancialResultsByPortofolio(financialResults: FinancialResult[]): FinancialResult[] {
    return financialResults.slice(0, 12);
}
