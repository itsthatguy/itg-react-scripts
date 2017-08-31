'use strict';

const config = require('./webpack.development');
const paths = require('./paths');
var tryToLoad = require('./utils/tryToLoad');
console.log(paths.appDevServerConfig);
const appDevServerConfig = tryToLoad(paths.appDevServerConfig, {});

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || 'localhost';

module.exports = Object.assign({},
  {
    compress: true,
    contentBase: paths.appPublic,
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    // clientLogLevel: 'none',
    quiet: false,
    inline: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    host: 'localhost',
    overlay: {
      warnings: false,
      errors: true,
    },
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: '/',
      timings: true,
      version: false,
      warnings: true,
      colors: true,
    },
  },
  appDevServerConfig,
);
