const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config/webpack.production');
const paths = require('../config/paths');

function printErrors(errors) {
  console.error('Failed to compile', 2);
  errors.forEach((err) => {
    console.log(`  ${err.message || err}`, 1);
  });
}

function build() {
  console.log(`Creating an optimized ${chalk.green(process.env.NODE_ENV)} build...`, 2);

  let compiler;
  try {
    compiler = webpack(config);
  } catch (err) {
    printErrors([err]);
    process.exit(1);
  }

  compiler.run((err, stats) => {
    if (err) {
      printErrors([err]);
      process.exit(1);
    }

    if (stats.compilation.errors.length) {
      printErrors(stats.compilation.errors);
      process.exit(1);
    }

    console.log(`Compiled ${chalk.green('successfully')}`, 'success', 1);
  });
}

// compile the app
build();
