import { PortfolioLine } from "../portfolio.service";

export const MOCK_PORTFOLIO_LINES: PortfolioLine[] = [
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
