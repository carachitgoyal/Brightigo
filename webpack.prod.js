const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const outputDirectory = 'dist';

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.join(__dirname, outputDirectory),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
});
