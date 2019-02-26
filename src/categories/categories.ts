import { ApiHandler } from '../../shared/common.interface';

import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

const service: CategoriesService = new CategoriesService();
export const controller: CategoriesController = new CategoriesController(service);

export const get: ApiHandler = controller.get;
