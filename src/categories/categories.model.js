import { Schema } from 'mongoose';

export const categorySchema = {
	_id: { type: String },
	parent: {
		type: String,
		ref: 'Category'
	},
	ancestors: [{
		type: String,
		ref: 'Category'
	}]
};

export const Category = new Schema(categorySchema);