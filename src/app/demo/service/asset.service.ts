import { Injectable } from '@angular/core';

import { Asset } from "../api/asset";
import { MOCK_ASSETS } from "./mock/asset-mock";

@Injectable()
export class AssetService {
    getAssets(): Asset[] {
        return MOCK_ASSETS;
    }
}
