import server from './server';
import { PORT } from '../config';
import request from 'supertest';
import Debug from 'debug';

const debug = Debug('retail:server.spec');

describe('server', () => {
	beforeEach(() => server.listen(PORT));
	afterEach(() => server.close());

	it('should start server', async () => {
		const res = await request(`http://localhost:${PORT}`).get('/');
		debug(res);
	});
});