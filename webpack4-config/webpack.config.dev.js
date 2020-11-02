const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { resolve } = require('path')

const baseWebpackConfig = require('./webpack.config.base.js')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        disableHostCheck: true,
        openPage: 'index.html',
        stats: "errors-only",
        historyApiFallback: true
    }
})

module.exports = devWebpackConfig