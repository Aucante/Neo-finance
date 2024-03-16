import { Injectable } from '@angular/core';
import { Asset } from "../api/asset";

@Injectable()
export class AssetService {

    getAssets(): Asset[] {
        return [
            {
                id: 1,
                name: 'Bitcoin',
                abbreviation: 'BTC',
                color: 'cyan',
                lastValue: 68000,
            },
            {
                id: 2,
                name: 'Ethereum',
                abbreviation: 'ETH',
                color: 'orange',
                lastValue: 3500,
            },
            {
                id: 3,
                name: 'Ripple',
                abbreviation: 'XRP',
                color: 'cyan',
                lastValue: 0.6,
            },
            {
                id: 4,
                name: 'Cardano',
                abbreviation: 'ADA',
                color: 'orange',
                lastValue: 0.7,
            },
        ];
    }
}
