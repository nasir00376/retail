import { Category } from './categories.interface';
import { categoryModel } from './categories.model';

export class CategoriesService {

    public readonly getCategories = async (): Promise<Category[]> => categoryModel.find();
}
