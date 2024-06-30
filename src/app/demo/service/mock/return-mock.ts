import { Return } from "../../api/return";

export const MOCK_RETURN_INCOME_1: Return = {
    id: 1,
    month: 'january',
    year: 2024,
    value: 1000,
    type: 'invest',
    description: 'real estate',
    isIncome: true,
}

export const MOCK_RETURN_INCOME_2: Return = {
    id: 2,
    month: 'january',
    year: 2024,
    value: 2000,
    type: 'invest',
    description: 'stock',
    isIncome: true,
}


export const MOCK_INCOME_RETURNS: Return[] = [
    MOCK_RETURN_INCOME_1,
    MOCK_RETURN_INCOME_2
];
