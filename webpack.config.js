var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Website Starter',
      template: 'app/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    })
  ]
};
