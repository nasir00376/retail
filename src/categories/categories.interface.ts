import { Document } from 'mongoose';

export interface Category {
    _id: string;
    ancesstors: Category[];
    parent: Category;
}

export interface CategoryModel extends Category, Document {
    _id: string;
}
