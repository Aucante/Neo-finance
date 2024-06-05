import { PortfolioLine } from "../portfolio.service";
import { MOCK_ASSET_BTC, MOCK_ASSET_XRP } from "./asset-mock";

export const MOCK_PORTFOLIO_LINES: PortfolioLine[] = [
    {
        id: 1,
        quantity: 10,
        asset: MOCK_ASSET_BTC,
    },
    {
        id: 2,
        quantity: 1,
        asset: MOCK_ASSET_XRP,
    },
];

export const MOCK_PORTFOLIO_LINE_1: PortfolioLine =
    {
        id: 1,
        quantity: 10,
        asset: MOCK_ASSET_BTC,
    }
;
