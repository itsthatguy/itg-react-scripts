const webpack          = require('webpack');
const path             = require('path');
const paths            = require('./paths');
const plugins          = require('./webpack/plugins');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules            = require('./webpack/rules');
const babelLoaderRules = require('./webpack/rules/babel-loader');

module.exports = {
  devtool: 'source-map',

  entry: [
    paths.appIndexJs,
  ],

  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
  },

  plugins: [
    ...plugins,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        // collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],

  module: {
    rules: [
      ...rules,
      babelLoaderRules({uglify: true}),
    ],
  },

  resolve: {
    modules: [
      paths.ownNodeModules,
      paths.appNodeModules,
      paths.appSrc,
    ].concat(paths.nodePaths),
    alias: { 'react-native': 'react-native-web' },
    extensions: ['.js', '.jsx', '.json']
  },

  resolveLoader: {
    modules: [
      paths.ownNodeModules,
      paths.appNodeModules,
    ],
  },
};
