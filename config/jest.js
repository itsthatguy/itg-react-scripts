const fs = require('fs');
const paths = require('./paths');
const tryToLoad = require('./utils/tryToLoad');

const projectRules = tryToLoad(paths.appJestOverrides, {});

module.exports = (resolve, rootDir) => {
  const setupTestFrameworkScriptFile =
    fs.existsSync(paths.testsSetup)
    && paths.testsSetup;

  const defaultConfig = {
    collectCoverageFrom: [`${paths.appSrc}/**/*.{js,jsx}`],
    testPathIgnorePatterns: [
      '<rootDir>[/](build|docs|node_modules|scripts)[/]',
    ],
    testMatch: [
      '**/__tests__/**/?(*.)(spec|test).js?(x)',
      '**/?(*.)(spec|test).js?(x)',
    ],
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(js|jsx)$': resolve('config/jest/babelTransform.js'),
      '^.+\\.css$': resolve('config/jest/cssTransform.js'),
    },
    modulePaths: [
      paths.ownNodeModules,
      paths.appNodeModules,
      paths.appSrc,
      '__tests__',
    ],
    ...projectRules,
  };

  const config = Object.assign({},
    defaultConfig,
    rootDir && { rootDir },
    setupTestFrameworkScriptFile && { setupTestFrameworkScriptFile }
  );

  return config;
};
