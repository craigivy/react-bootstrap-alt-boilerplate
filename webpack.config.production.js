/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // The directory that static assets will be placed in when served to the client.
    publicPath: '/'
  },

  plugins: [
    // Attaches links to the bundled js sources to index.ejs automatically
    //new HtmlWebpackPlugin({
    //  template: 'views/index.ejs',
    //  inject: 'body',
    //  filename: 'index.ejs'
    //}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/
    }]
  }
};
