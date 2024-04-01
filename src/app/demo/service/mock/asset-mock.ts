import { Asset } from "../../api/asset";

export const MOCK_ASSETS: Asset[] = [
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
    {
        id: 5,
        name: 'Litecoin',
        abbreviation: 'LTC',
        color: 'cyan',
        lastValue: 120,
    },
    {
        id: 6,
        name: 'Solana',
        abbreviation: 'SOL',
        color: 'orange',
        lastValue: 180,
    },
];
