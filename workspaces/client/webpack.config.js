const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  entry: {
    app: '../../sndbox/client/client/src/client.tsx',
  },

  output: {
    filename: '[chunkhash].js',
    path: path.join(__dirname, '../../public/client'),
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
