import { Injectable } from '@angular/core';
import { InMemoryDbService} from "angular-in-memory-web-api";
import { MOCK_ASSETS } from "../mock/asset-mock";
import { MOCK_PORTFOLIOS } from "../mock/portfolio-mock";
import { MOCK_TRANSACTIONS } from "../mock/transaction-mock";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

    createDb() {

      const assets = MOCK_ASSETS;
      const portfolios = MOCK_PORTFOLIOS;
      const transactions = MOCK_TRANSACTIONS;

      return { assets, portfolios, transactions };
    }
}
