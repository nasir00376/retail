import Debug from 'debug';
import mongoose from 'mongoose';
import { dbURL } from './config';

const debug = Debug('retail:db');

export const connectDB = async () => {
	await mongoose.connect(dbURL, { useNewUrlParser: true });
	debug('Database connected successfully');
};