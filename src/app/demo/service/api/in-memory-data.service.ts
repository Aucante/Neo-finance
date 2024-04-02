import { Injectable } from '@angular/core';
import { InMemoryDbService} from "angular-in-memory-web-api";
import { MOCK_ASSETS } from "../mock/asset-mock";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

    createDb() {

      const assets = MOCK_ASSETS;

      return { assets };
    }
}
