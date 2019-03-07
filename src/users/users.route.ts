import { Router } from 'express';

import { addToCart } from './users';

const router: Router = Router();

router.put('/me/cart', addToCart);

export const usersRoutes: Router = router;
