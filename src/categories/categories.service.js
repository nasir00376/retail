import { Category } from './categories.model';

export class CategoriesService {
	async getCategories() {
		return Category.findAll();
	}
}
