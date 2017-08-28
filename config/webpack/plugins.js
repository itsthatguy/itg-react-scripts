const webpack = require('webpack');
const chalk = require('chalk');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const paths = require('../paths');
const tryToLoad = require('../utils/tryToLoad');

const getClientEnvironment = require('../env');
const env = getClientEnvironment();

const projectPlugins = tryToLoad(paths.appWebpackPlugins, []);

const PLUGINS = [
  new CaseSensitivePathsPlugin(),
  new InterpolateHtmlPlugin(env.raw),
  new webpack.DefinePlugin(env.stringified),
  new webpack.optimize.OccurrenceOrderPlugin(),
  ...projectPlugins,
  new ProgressBarPlugin({
    format: `  Compiling (${chalk.yellow(':percent')}) [:bar] `,
  }),
];

module.exports = PLUGINS;
