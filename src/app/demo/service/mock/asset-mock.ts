import { Asset } from "../../api/asset";

export const MOCK_ASSET_BTC: Asset = {
    id: 1,
    name: 'Bitcoin',
    abbreviation: 'BTC',
    color: 'cyan',
    value: 68000
}

export const MOCK_ASSET_ETH: Asset = {
    id: 2,
    name: 'Ethereum',
    abbreviation: 'ETH',
    color: 'orange',
    value: 3500,
}

export const MOCK_ASSET_XRP: Asset = {
    id: 3,
    name: 'Ripple',
    abbreviation: 'XRP',
    color: 'cyan',
    value: 0.6,
}

export const MOCK_ASSET_ADA: Asset = {
    id: 4,
    name: 'Cardano',
    abbreviation: 'ADA',
    color: 'orange',
    value: 0.7,
}

export const MOCK_ASSET_LTC: Asset = {
    id: 5,
    name: 'Litecoin',
    abbreviation: 'LTC',
    color: 'cyan',
    value: 120
}

export const MOCK_ASSET_SOL: Asset = {
    id: 6,
    name: 'Solana',
    abbreviation: 'SOL',
    color: 'orange',
    value: 180,
}

export const MOCK_ASSETS: Asset[] = [
    MOCK_ASSET_BTC,
    MOCK_ASSET_ETH,
    MOCK_ASSET_XRP,
    MOCK_ASSET_ADA,
    MOCK_ASSET_LTC,
    MOCK_ASSET_ADA,
];
