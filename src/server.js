import express from 'express';
import Debug from 'debug';

const debug = Debug('retail:app');

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => debug(`Server is listening on ${PORT}`));