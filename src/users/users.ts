import { UsersService } from './users.service';
import { UsersController } from './users.controller';

const service: UsersService = new UsersService();
const controller: UsersController = new UsersController(service);

export const addToCart = controller.cart;
