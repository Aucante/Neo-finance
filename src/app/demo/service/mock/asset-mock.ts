import { Asset } from "../../api/asset";

export const MOCK_ASSET_BTC: Asset = {
    id: 1,
    name: 'Bitcoin',
    abbreviation: 'BTC',
    color: 'cyan',
    lastValue: 68000
}

export const MOCK_ASSET_ETH: Asset = {
    id: 2,
    name: 'Ethereum',
    abbreviation: 'ETH',
    color: 'orange',
    lastValue: 3500,
}

export const MOCK_ASSET_XRP: Asset = {
    id: 3,
    name: 'Ripple',
    abbreviation: 'XRP',
    color: 'cyan',
    lastValue: 0.6,
}

export const MOCK_ASSET_ADA: Asset = {
    id: 4,
    name: 'Cardano',
    abbreviation: 'ADA',
    color: 'orange',
    lastValue: 0.7,
}

export const MOCK_ASSET_LTC: Asset = {
    id: 5,
    name: 'Litecoin',
    abbreviation: 'LTC',
    color: 'cyan',
    lastValue: 120
}

export const MOCK_ASSET_SOL: Asset = {
    id: 6,
    name: 'Solana',
    abbreviation: 'SOL',
    color: 'orange',
    lastValue: 180,
}

export const MOCK_ASSETS: Asset[] = [
    MOCK_ASSET_BTC,
    MOCK_ASSET_ETH,
    MOCK_ASSET_XRP,
    MOCK_ASSET_ADA,
    MOCK_ASSET_LTC,
    MOCK_ASSET_ADA,
];
