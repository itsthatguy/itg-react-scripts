const webpack = require('webpack');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = [
  new CaseSensitivePathsPlugin(),
  new webpack.DefinePlugin({
    CONFIG: JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ProgressBarPlugin({
    format: `  Compiling (${chalk.yellow(':percent')}) [:bar] `,
  }),
];
