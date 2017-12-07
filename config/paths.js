const path = require('path');
const fs   = require('fs');
const url  = require('url');

const APP_ROOT = fs.realpathSync(process.cwd());
const APP_SRC  = 'src';

function resolveApp (relativePath) {
  return path.resolve(APP_ROOT, relativePath);
}

function resolveOwn (relativePath) {
  return path.resolve(__dirname, '..', relativePath);
}

const nodePaths = (process.env.NODE_PATH || '')
.split(process.platform === 'win32' ? ';' : ':')
.filter(Boolean)
.filter(folder => !path.isAbsolute(folder))
.map(resolveApp);

const PATHS = {
  appRoot: APP_ROOT,
  appSrc: resolveApp(APP_SRC),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp(`${APP_SRC}/index.js`),
  appBuild: resolveApp('build'),
  appPackageJson : resolveApp('package.json'),
  appWebpackRules: resolveApp('webpack/rules.js'),
  appWebpackPlugins: resolveApp('webpack/plugins.js'),
  appDevServerConfig: resolveApp('webpack/devServer.config.js'),
  appEslintOptionsPath: resolveApp('eslint-loader-config.js'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp(`__tests__/test-setup.js`),
  appJestOverrides: resolveApp('jest.config.js'),
  nodePaths: nodePaths,
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveOwn('node_modules'),
};

module.exports = PATHS;
