import { App } from '../../shared/common.interface';
import { categoriesRoutes } from '../categories/categories.routes';

export function routes(app: App): void {
    app.use('/api/categories', categoriesRoutes);
}
