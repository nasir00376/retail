import { Schema } from 'mongoose';
import { categorySchema } from '../categories/categories.model';
import { currencies, currencySymbols, fx } from '../../shared';

export const Product = new Schema({
	name: { type: String, required: true },
	// Pictures must start with 'http://
	pictures: [{ type: String, match: /^http:\/\//i }],
	price: {
		amount: {
			type: Number,
			required: true,
			// custom setters
			set: function (v) {
				this.internal.approximatePriceUSD = v / (fx()[this.price.currency] || 1);
				return v;
			}
		},
		// Only 3 supported currencies for now
		currency: {
			type: String,
			enum: currencies,
			required: true,
			set: function (v) {
				this.internal.approximatePriceUSD = this.price.amount / (fx()[v] || 1);
				return v;
			}
		}
	},
	category: categorySchema,
	internal: {
		approximatePriceUSD: Number
	}
});

/**
 * Human readable string form of price = "$25" rather
 * than "25 USD"
 */

Product.virtual('displayPrice').get(function () {
	return `${currencySymbols[this.price.currency]}${this.price.amount}`;
});

Product.set('toObject', { virtuals: true });
Product.set('toJSON', { virtuals: true });