const path = require('path');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    main: ['./index.js'],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },
  mode,
  devtool: 'source-map',
};
