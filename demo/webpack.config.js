const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './demo/index.tsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8888
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.ejs'
    })
  ]
}
