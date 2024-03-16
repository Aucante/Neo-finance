import { Portfolio } from "./portfolio";

export interface Asset {
    id: number;
    name: string;
    abbreviation: string;
    color: string;
    lastValue: number;
    portfolio: Portfolio
}
