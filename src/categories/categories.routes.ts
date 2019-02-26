import { Router } from 'express';

import { get } from './categories';

const router: Router = Router();

router.get('/', get);

export const categoriesRoutes: Router = router;
