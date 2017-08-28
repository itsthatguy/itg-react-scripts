const paths = require('../paths');
const tryToLoad = require('../utils/tryToLoad');

const appEslintOptions = tryToLoad(paths.appEslintOptionsPath, {});
const projectRules = tryToLoad(paths.appWebpackRules, []);

const RULES = [
  { parser: { requireEnsure: false } },
  {
    test: /\.jsx?$/,
    enforce: 'pre',
    include: paths.appSrc,
    use: [
      {
        loader: 'eslint-loader',
        options: Object.assign({
          baseConfig: {
            extends: ['adorable'],
          },
          useEslintrc: true,
        },
        appEslintOptions
      ),
      }
    ]
  },
  {
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ],
  },
  ...projectRules,
];

module.exports = RULES;
