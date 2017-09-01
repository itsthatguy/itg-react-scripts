process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const chalk = require('chalk');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const webpackConfig = require('../config/webpack.development');
const webpackDevServerConfig = require('../config/webpackDevServer.config');
const paths = require('../config/paths');

require('dotenv').config({ silent: true });

const PORT = parseInt(process.env.PORT, 10) || 3000;

function runServer(port) {
  const compiler = Webpack(webpackConfig);

  const devServer = new WebpackDevServer(compiler, webpackDevServerConfig);

  devServer.listen(port, (err) => {
    if (err) { return console.log(chalk.red(err)); }

    // clear the console
    if (process.stdout.isTTY) process.stdout.write('\x1B[2J\x1B[3J\x1B[H');

    console.log();
    console.log('Starting the', chalk.green(`${process.env.NODE_ENV}`), 'server on port', chalk.green(port));
    console.log();

    return true;
  });
}

runServer(PORT);
