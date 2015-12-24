/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '/dist/'), // This doesn't really matter since the dev server is using webpack-dev-middleware
    filename: 'bundle.js',
    // The directory that static assets will be placed in when served to the client.
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // TODO do we want this for dev??? We have to have it right now because the <script> tags in index.ejs are hard-coded...
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
