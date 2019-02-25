import { Router } from 'express';

import { get } from '../categories/categories';

export const router: Router = Router();

router.get('/', get);
