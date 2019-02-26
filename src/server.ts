import * as Debug from 'debug';
import * as express from 'express';

import { connectDB, PORT } from '../config';

import { categoriesRoutes } from './categories/categories.routes';

const debug: Debug.IDebugger = Debug('retail:app');

const app: express.Application = express();
// Database connection
connectDB()
    .catch((error: Error) => debug('Error while db connection', error.message));

// Use routes as middlewares
// Routes(app);

app.use('/api/categories', categoriesRoutes);
app.listen(PORT, () => debug(`Server is listening on ${PORT}`));
