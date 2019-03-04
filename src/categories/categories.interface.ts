import { Document } from 'mongoose';

export interface Category {
    _id?: string;
    ancesstors: string[];
    name: string;
    parent: string;
}

export interface CategoryModel extends Category, Document {
    _id: string;
}
