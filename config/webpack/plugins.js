const webpack = require('webpack');
const chalk = require('chalk');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const getClientEnvironment = require('../env');
const env = getClientEnvironment();

module.exports = [
  new CaseSensitivePathsPlugin(),
  new InterpolateHtmlPlugin(env.raw),
  new webpack.DefinePlugin(env.stringified),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new ProgressBarPlugin({
    format: `  Compiling (${chalk.yellow(':percent')}) [:bar] `,
  }),
];
