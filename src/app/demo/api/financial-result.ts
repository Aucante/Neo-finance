import { User } from "./user";

export interface FinancialResult {
    id: number;
    value: number;
    month: string;
    year: number;
    user: User;
}
