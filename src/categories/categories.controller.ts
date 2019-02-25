import { Category } from './categories.interface';
import { CategoriesService } from './categories.service';

export class CategoriesController {
    public constructor(private readonly service: CategoriesService) { }

    public async get(): Promise<Category[]> {
        return this.service.getCategories();
    }
}
