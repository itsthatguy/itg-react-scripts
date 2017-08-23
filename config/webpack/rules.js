const path = require('path');
const paths = require('../paths');

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
        require(path.resolve(paths.appRoot, 'eslint-loader-config.js'))),
      }
    ]
  },
  {
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ],
  }
];
