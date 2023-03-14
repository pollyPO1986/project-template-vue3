const { defineConfig } = require('@vue/cli-service');
const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@assets/scss/_variables.scss";`
      }
    },
    sourceMap: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_ROUTE_BASE_URL
    : '/',
  transpileDependencies: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    // pug Loader
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'));
  }
});
