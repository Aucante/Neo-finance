import { Portfolio } from "./portfolio";
import { Asset } from "./asset";

export interface PortfolioLine {
    id: number;
    quantity: number;
    value: number;
    portfolio: Portfolio;
    asset: Asset;
}
