/*
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
*/
console.log('TODOS')
console.log('Define a NodeJS based user management module using pbkbdf2 for hashing and salting passwords')
console.log('Install dotenv for configuring database variables and a salt string for the user manager')
