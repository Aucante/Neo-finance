import { Injectable } from '@angular/core';
import { InMemoryDbService} from "angular-in-memory-web-api";
import { MOCK_ASSETS } from "../mock/asset-mock";
import { MOCK_PORTFOLIOS } from "../mock/portfolio-mock";
import { MOCK_TRANSACTIONS } from "../mock/transaction-mock";
import { MOCK_INCOME_RETURNS } from "../mock/return-mock";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

    createDb() {

      const assets = MOCK_ASSETS;
      const portfolios = MOCK_PORTFOLIOS;
      const transactions = MOCK_TRANSACTIONS;
      const incomes = MOCK_INCOME_RETURNS;

      return { assets, portfolios, transactions, incomes };
    }
}
