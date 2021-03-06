module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {

      },
      less: {
        additionalData: `@env: ${process.env.NODE_ENV};`,
        lessOptions: {
          globalVars: {
            primary: '#07C9B8',
          },
        },
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: '3000',
  },
};
