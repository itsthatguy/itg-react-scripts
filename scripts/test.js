process.env.NODE_ENV = 'test';

require('../config/env');

const paths = require('../config/paths');
const path = require('path');
const jest = require('jest');
const jestConfig = require('../config/jest');

process.on('unhandledRejection', (err) => {
  throw err;
});

const argv = process.argv.slice(2);

if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

const args = jestConfig(relativePath => path.resolve(__dirname, '..', relativePath), path.resolve(paths.appSrc, '..'));

argv.push('--no-cache', '--config', JSON.stringify(args));

jest.run(argv);
