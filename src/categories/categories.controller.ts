import * as Debug from 'debug';

import { ApiHandler, Request, Response } from '../../shared/common.interface';
import { BadRequestResult, InternalServerErrorResult } from '../../shared/errors';
import { ResponseBuilder } from '../../shared/response-builder';

import { Category } from './categories.interface';
import { CategoriesService } from './categories.service';

const debug: Debug.IDebugger = Debug('retail:controller:categories');

export class CategoriesController {

    public constructor(private readonly _service: CategoriesService) {
    }

    public get: ApiHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const categories: Category[] = await this._service.getCategories();
            debug('Categories fetcehd.');

            ResponseBuilder.ok<Category[]>(categories, res);

        } catch (error) {
            if (error instanceof BadRequestResult) {
                return ResponseBuilder.badRequest(error.code, error.description, res);
            }

            if (error instanceof InternalServerErrorResult) {
                return ResponseBuilder.internalServerError(error.code, error.description, res);
            }

            return ResponseBuilder.generalError(error, res);
        }
    }
}
