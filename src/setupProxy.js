const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://sandbox-api.brewerydb.com/",
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/v2/'
      },
    })
  );
};
