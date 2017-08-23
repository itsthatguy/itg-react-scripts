const paths = require('../paths');

let appEslintOptions;
try {
  appEslintOptions = require(paths.appEslintOptionsPath);
} catch (error) {
  appEslintOptions = {};
}

module.exports = [
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
        appEslintOptions,
      ),
      }
    ]
  },
  {
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ],
  }
];
