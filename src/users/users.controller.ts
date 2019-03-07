import * as Debug from 'debug';

import { ErrorCode } from '../../build/shared/error-codes';
import { BadRequestResult, InternalServerErrorResult } from '../../build/shared/errors';
import { ResponseBuilder } from '../../build/shared/response-builder';
import { ApiHandler, Request, Response } from '../../shared/common.interface';

import { UserModel } from './user.interface';
import { UsersService } from './users.service';

const debug: Debug.IDebugger = Debug('retail:controller:users');

export class UsersController {
    public constructor(private readonly _service: UsersService) { }
    // Users cart
    public cart: ApiHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const { body, body: { cart, user: { id: userId } }, } = req;

            if (!Object.keys(body).length) {
                throw new BadRequestResult(ErrorCode.InvalidBody, 'Post body is required.');
            }

            const result: UserModel = await this._service.addToCart(cart, userId);
            debug('Product created.');

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
}
