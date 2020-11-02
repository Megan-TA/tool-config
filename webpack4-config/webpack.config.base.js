const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

var utils = require('./utils')

const customENV = Object.keys(process.env).reduce((previous, current) => {
  if (/^VUE_APP_/.test(current)) previous[current] = process.env[current]
  return previous
}, {})

const baseWebpackConfig = {
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@src': path.resolve(__dirname, './src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude:/node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: [
          path.join(__dirname, '../code-block')
        ],
        exclude: /node-modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 1024,
          name: 'asserts/[name].[ext]'
        }
      },

    ].concat(utils.styleLoaders())
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(customENV)
    }),
  
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './index.html'),
        inject: true
    })

  ] 
}

module.exports = baseWebpackConfig