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

const styleLoader = {
  test: /\.sass$/,
  use: ['vue-style-loader',
  {
      loader: 'css-loader',
      options: { modules: true },
  }, {
      loader: 'sass-loader',
  }, {
      loader: 'sass-resources-loader',
      options: {
        resources: ['./src/assets/styles/defs/colors.sass'],
      },
  }],
};

const fileLoader = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader',
  ],
};

const webpackLoaders = [
  { ...babelLoader },
  { ...htmlLoader },
  { ...styleLoader },
  { ...fileLoader },
];

module.exports = webpackLoaders;
