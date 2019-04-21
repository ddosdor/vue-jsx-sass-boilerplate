const path = require('path');
const plugins = require('./plugins');
const loaders = require('./loaders');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('../dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('../src'),
    },
  },
  plugins,
  module: {
    rules: [...loaders],
  },
  devServer: {
    port: process.env.PORT || '8080',
  },
};
