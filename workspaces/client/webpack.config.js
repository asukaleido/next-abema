const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  entry: {
    app: '../../sndbox/assets/client/index.ts',
  },

  output: {
    filename: '[chunkhash].js',
    path: path.join(__dirname, '../../public/assets'),
    publicPath: '/assets/',
  },

  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app'],
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new ManifestPlugin(),
  ],
};
