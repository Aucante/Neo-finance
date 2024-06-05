import { PortfolioLine } from "./portfolio-line";

export interface Transaction {
    id: number;
    price: number;
    quantity: number;
    fees?: number;
    date: Date;
    note?: string;
    is_purchased: boolean;
    portfolioLine: number;
}
