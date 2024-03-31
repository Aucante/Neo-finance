const CURRENCY_CODE_USD = 'USD';
const CURRENCY_CODE_EUR = 'EUR';
const CURRENCY_CODE_GPB = 'GPB';
export const CURRENCIES_CODE = [
    CURRENCY_CODE_USD,
    CURRENCY_CODE_EUR,
    CURRENCY_CODE_GPB,
]

export class SettingHelper {
    static getCurrencyName(currencyCode: string): string {
        const currencyNames: { [key: string]: string } = {
            CURRENCY_CODE_USD: 'dollar',
            CURRENCY_CODE_EUR: 'euro',
            CURRENCY_CODE_GPB: 'pound',
        };

        if (!(currencyCode in currencyNames)) {
            throw new Error('Unknown Currency');
        }
        return currencyNames[currencyCode];
    }
}
