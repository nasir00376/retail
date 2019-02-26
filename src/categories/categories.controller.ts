import * as Debug from 'debug';

import { ApiHandler, Request, Response } from '../../shared/common.interface';

import { Category } from './categories.interface';
import { CategoriesService } from './categories.service';

const debug: Debug.IDebugger = Debug('retail:controller:categories');

export class CategoriesController {

    public constructor(private readonly _service: CategoriesService) {
    }

    public get: ApiHandler = async (req: Request, res: Response): Promise<void> => {
        const categories: Category[] = await this._service.getCategories();
        debug('Categories fetcehd.');
        res.send(categories);
    }
}
