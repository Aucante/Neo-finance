import { Portfolio } from "./portfolio";

export interface FinancialResult {
    id: number;
    value: number;
    month: string;
    year: number;
    portfolio: Portfolio;
}
