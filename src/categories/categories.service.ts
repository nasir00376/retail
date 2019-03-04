import { omit } from 'lodash';

import { shallowCopy } from '../../shared';
import { Filter, ID, Where } from '../../shared/common.interface';
import { ErrorCode } from '../../shared/error-codes';
import { InternalServerErrorResult, NotFoundResult } from '../../shared/errors';

import { Category, CategoryModel } from './categories.interface';
import { categoryModel } from './categories.model';

export class CategoriesService {
    // Create new Instance of Category
    public readonly create = async (data: Category): Promise<Category> => categoryModel.create(this.formatData(data));
    // List categories by filter
    public readonly get = async (filter?: Filter): Promise<Category[]> => {
        try {
            const where: Where | undefined = filter && filter.where;
            const categories: CategoryModel[] = await categoryModel.find(where).sort({ _id: 1 });

            return this.fromatResponse(shallowCopy(categories));
        } catch (error) {
            throw new InternalServerErrorResult(ErrorCode.InternalServerError, 'Something went wrong');
        }
    }

    public readonly getById = async (_id: ID): Promise<Category> => {
        try {
            const category: CategoryModel | null = await categoryModel.findOne({ _id });
            if (!category) {
                throw new NotFoundResult(ErrorCode.InvalidId, 'Category not found.');
            }
            return this.formatCategory(category);
        } catch (error) {
            if (error instanceof NotFoundResult) { throw error; }

            throw new InternalServerErrorResult(ErrorCode.InternalServerError, 'Something went wrong');
        }
    }

    private readonly formatCategory = (category: CategoryModel): Category => ({
        name: category._id || '',
        ...omit(category, ['_id', '__v'])
    })

    // Format data
    private readonly formatData = (data: Category): Category =>
        ({
            _id: data.name,
            ...data
        })
    // Format response
    private readonly fromatResponse = (data: CategoryModel[]): Category[] =>
        data.map((category: CategoryModel) => this.formatCategory(category))
}
