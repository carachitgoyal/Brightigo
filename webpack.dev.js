const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const outputDirectory = 'dist';

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, outputDirectory),
  },
  // debug: true,
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    open: false,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});
