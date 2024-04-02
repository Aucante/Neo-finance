import { PortfolioLine } from "../portfolio.service";
import { MOCK_ASSET_BTC, MOCK_ASSET_XRP } from "./asset-mock";

export const MOCK_PORTFOLIO_LINES: PortfolioLine[] = [
    {
        id: 1,
        quantity: 10,
        value: 1.50,
        asset: MOCK_ASSET_BTC,
    },
    {
        id: 2,
        quantity: 1,
        value: 400,
        asset: MOCK_ASSET_XRP,
    },
];
