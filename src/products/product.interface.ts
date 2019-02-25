import { Document } from 'mongoose';

import { Category } from '../categories/categories.interface';

export type Picture = string;
export type Currency = 'USD | GBP | EUR';

export interface Price {
    amount: number;
    currency: Currency;
}

export interface Internal {
    approximatePriceUSD: number;
}

export interface Product {
    category: Category;
    internal: Internal;
    name: string;
    pictures: Picture[];
    price: Price;
}

export interface ProductModel extends Product, Document {
    _id: string;
}
