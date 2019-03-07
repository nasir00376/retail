import { ApiHandler } from '../../shared/common.interface';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const service: UsersService = new UsersService();
const controller: UsersController = new UsersController(service);

export const addToCart: ApiHandler = controller.cart;
