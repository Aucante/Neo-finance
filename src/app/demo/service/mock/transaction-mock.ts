import { Transaction } from "../../api/transaction";

export const MOCK_TRANSACTIONS: Transaction[] = [
    {
        "id": 1,
        "price": 1,
        "quantity": 1,
        "fees": 1,
        "date": new Date(),
        "note": "1",
        "is_purchased": true,
        "portfolioLine": 1
    }
]
