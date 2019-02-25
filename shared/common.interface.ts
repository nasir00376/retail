export interface KeyValuePair {
    // tslint:disable-next-line:no-any
    [key: string]: any;
}

export interface CurrencySymbols {
    EUR: string;
    GBP: string;
    USD: string;
}

export interface Fx {
    EUR: number;
    GBP: number;
    USD: number;
}

export type Currencies = ['USD', 'EUR', 'GBP'];
