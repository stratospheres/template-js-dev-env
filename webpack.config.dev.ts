/// <reference path="./node_modules/@types/webpack/index.d.ts" />

import webpack = require("webpack");

// either of the next 2 work... why?
// import path = require('path');
import * as path from "path";

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index.ts')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
      })
  ],
  module: {
    rules: [
      {test: /\.ts$/, exclude: /node_modules/, loaders: ['ts-loader']},
      {test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader','css-loader']}
    ]
  }
}
