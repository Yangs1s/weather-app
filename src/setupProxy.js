
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
        '/api',
		createProxyMiddleware({
            target: 'https://www.koreaexim.go.kr',
			changeOrigin: true,
		})
	);
};
//      target: 'https://www.koreaexim.go.kr',