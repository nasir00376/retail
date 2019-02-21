import { Schema } from 'mongoose';

export const User = new Schema({
	profile: {
		username: {
			type: String,
			required: true,
			lowercase: true
		},
		picture: {
			type: String,
			required: true,
			match: /^http:\/\//i
		},
		isAdmin: { type: Boolean, default: false },
		data: {
			oauth: { type: String, required: true },
			cart: [{
				product: { type: Schema.Types.ObjectId },
				quantity: {
					type: Number,
					default: 1,
					min: 1
				}
			}]
		}
	}
});