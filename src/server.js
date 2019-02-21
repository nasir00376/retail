import Debug from 'debug';
import express from 'express';
import { connectDB } from '../config';

const debug = Debug('retail:app');

const app = express();
// Database connection
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => debug(`Server is listening on ${PORT}`));