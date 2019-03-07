import { Cart, UserModel } from "../users/user.interface";
import { userModel } from "../../build/src/users/users.model";

export class CartService {
    public async addToCart(cart: Cart, id: string): Promise<UserModel> {
        return userModel.findOneAndUpdate(id, { data: cart })
    }
}