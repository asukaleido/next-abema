const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {

  entry: './src/index.ts',

  output: {
    filename: 'server.js',
    filename: '[chunkhash].js',
    path: path.join(__dirname, '../../public/server'),
  },

  module: {
    rules: [{
      test: /\.(js|ts)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },

  plugins: [
    new ManifestPlugin(),
  ],
};
