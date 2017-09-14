require('babel-register');

const router = require('./routes').default;
const Sitemap = require('react-router-sitemap').default;

(
	new Sitemap(router)
		.build('http://localhost:9000')
		.save('./sitemap.xml')
);