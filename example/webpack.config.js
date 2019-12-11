const path = require('path');
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, './build'),
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', {
          loader: path.join(__dirname, '..'),
          options: {
            componentDir: 'components',
            reducerName: 'reducer',
            typeName: 'type',
            loadablePath: '../../lib/loadable',
          },
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: [path.join(__dirname, '../build'), path.join(__dirname, '..')],
    hot: true,
    port: 2222,
    disableHostCheck: true,
    // open: true,
  }
}