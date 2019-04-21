const babelLoader = {
  // Include ts, tsx, js, and jsx files.
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

const htmlLoader = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: { minimize: true },
    },
  ],
};

const webpackLoaders = [
  { ...babelLoader },
  { ...htmlLoader },
];

module.exports = webpackLoaders;
