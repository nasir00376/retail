import * as Debug from 'debug';

import { ApiHandler, Filter, Request, Response } from '../../shared/common.interface';
import { ErrorCode } from '../../shared/error-codes';
import { BadRequestResult, InternalServerErrorResult } from '../../shared/errors';
import { ResponseBuilder } from '../../shared/response-builder';

import { Category } from './categories.interface';
import { CategoriesService } from './categories.service';

const debug: Debug.IDebugger = Debug('retail:controller:categories');

export class CategoriesController {

    public constructor(private readonly _service: CategoriesService) {
    }

    public create: ApiHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const { body } = req;

            if (!Object.keys(body).length) {
                throw new BadRequestResult(ErrorCode.InvalidBody, 'Post body is required.');
            }
            const result: Category = await this._service.create(body);
            debug('Category created.');

            ResponseBuilder.ok(result, res);

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

    public get: ApiHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const categories: Category[] = await this._service.get();
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

    // Get by parent category
    public getByParent: ApiHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const { params: { parent } } = req;

            const filter: Filter = {
                where: { parent }
            };

            const categories: Category[] = await this._service.get(filter);
            debug('Categories list by parent.', parent);

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