import { Model, model, Schema } from 'mongoose';

import { UserModel } from './user.interface';

export const userModel: Model<UserModel> = model<UserModel>('User', new Schema({
    data: {
        cart: [{
            product: { type: Schema.Types.ObjectId },
            quantity: {
                default: 1,
                min: 1,
                type: Number,
            }
        }],
        oauth: { type: String, required: true },
    },
    profile: {
        isAdmin: {
            default: false,
            type: Boolean,
        },
        picture: {
            match: /^http:\/\//i,
            required: true,
            type: String,
        },
        username: {
            lowercase: true,
            required: true,
            type: String,
        }
    }
}));
