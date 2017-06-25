var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context:path.resolve('src'),
  entry: "./js/client.js",
  output: {
    path:"build",
    filename: "bundle.js",
    publicPath:path.resolve('build')
  },
  devServer: {
      inline: true,
      contentBase: './build',
      port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel'],
        query: {
          presets: ['latest', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      }
    ]
  }
}
