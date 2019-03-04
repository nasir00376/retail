import { ApiHandler } from '../../shared/common.interface';

import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

const service: CategoriesService = new CategoriesService();
export const controller: CategoriesController = new CategoriesController(service);

export const list: ApiHandler = controller.get;
export const listByParent: ApiHandler = controller.getByParent;
export const create: ApiHandler = controller.create;
