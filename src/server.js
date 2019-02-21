import Debug from 'debug';
import express from 'express';
import { connectDB, PORT } from '../config';

const debug = Debug('retail:app');

const app = express();
// Database connection
connectDB();

app.listen(PORT, () => debug(`Server is listening on ${PORT}`));

export default app;