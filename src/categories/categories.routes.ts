import { Router } from 'express';

import { create, list, listByParent } from './categories';

const router: Router = Router();

router.get('/', list);
router.get('/parent/:parent', listByParent);
router.post('/', create);

export const categoriesRoutes: Router = router;
