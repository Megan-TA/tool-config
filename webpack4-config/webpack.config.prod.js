const { merge } = require('webpack-merge')
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleSyntaxCheckerPlugin= require("webpack-bundle-syntax-check-plugin");
const path = require('path')

const baseWebpackConfig = require('./webpack.config.base')

const NODE_ENV = process.env.NODE_ENV || 'production'

const webpackConfig = {
    mode: 'production',
    externals: {
        'vue':'Vue',  
        'vue-router': 'VueRouter',
        'vuex':'Vuex',
        'axios':'axios'
    },
  
    stats: 'errors-only',

    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                },
                include: [
                    path.join(__dirname, './src')
                ],
                exclude: /node-modules/
            }
        ]
    },
    
    plugins: [
        new BundleSyntaxCheckerPlugin({esVersion: 5}),
        new ExtractCssChunks({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin()
    ]
};

const proWebpackConfig = merge(baseWebpackConfig, webpackConfig)

if (NODE_ENV === 'analyzer') {
    const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

    const smp = new SpeedMeasurePlugin()

    proWebpackConfig.plugins.push(
        new BundleAnalyzerPlugin(),
    )

    smp.wrap(proWebpackConfig)
}

if (NODE_ENV === 'production') {
    proWebpackConfig.plugins.push(
        new CompressionWebpackPlugin()
    )
}

module.exports = proWebpackConfig