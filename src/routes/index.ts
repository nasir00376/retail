import { App } from '../../shared/common.interface';
import { categoriesRoutes } from '../categories/categories.routes';
import { productsRoutes } from '../products/products.routes';

// Register all routes in app
export function routes(app: App): void {
    app.use('/api/categories', categoriesRoutes);
    app.use('/api/products', productsRoutes);
}
