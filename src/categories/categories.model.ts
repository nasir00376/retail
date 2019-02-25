import { Model, model, Schema } from 'mongoose';

import { KeyValuePair } from '../../shared/common.interface';

import { CategoryModel } from './categories.interface';

export const categorySchema: KeyValuePair = {
    _id: { type: String },
    ancestors: [{
        ref: 'Category',
        type: String,
    }],
    parent: {
        ref: 'Category',
        type: String,
    },
};

export const categoryModel: Model<CategoryModel> = model<CategoryModel>('Category', new Schema(categorySchema));
