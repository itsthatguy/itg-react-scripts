const webpack = require('webpack');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = [
  new CaseSensitivePathsPlugin(),
  new webpack.DefinePlugin({
    CONFIG: JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
];
