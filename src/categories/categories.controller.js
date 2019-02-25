export class CategoriesController {
	constructor(categoriesService) {
		this.service = categoriesService;
	}
	get() {
		this.service.getCategories();
	}
}