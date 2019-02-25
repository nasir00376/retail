import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

const service: CategoriesService = new CategoriesService();
const controller: CategoriesController = new CategoriesController(service);

export const { get } = controller;
