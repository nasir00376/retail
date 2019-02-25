import { Document } from 'mongoose';

export interface Cart {
    product: string;
    quantity: number;
}

export interface UserData {
    cart: Cart[];
    oauth: string;
}

export interface Profile {
    isAdmin: boolean;
    picture: string;
    username: string;
}

export interface User {
    data: UserData;
    profile: Profile;
}

export interface UserModel extends User, Document {
    _id: string;
}
