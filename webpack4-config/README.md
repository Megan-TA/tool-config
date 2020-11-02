# webpack4-config

主要以vue技术栈配置为主，其他技术栈配置大同小异

采用的`better-npm-run2`方式处理scripts

注意点

- webpack4对应的webpack-cli不能超过v4版本

功能点

- [webpack4-config](#webpack4-config)
  - [环境变量](#环境变量)
  - [babel配置](#babel配置)
  - [html配置](#html配置)
  - [图片处理](#图片处理)
  - [gzip压缩](#gzip压缩)
  - [打包详细耗时](#打包详细耗时)
  - [打包文件查看](#打包文件查看)
  - [打包时删除旧dist](#打包时删除旧dist)
  - [检测打包后bundle是否满足指定ECMAScript语法](#检测打包后bundle是否满足指定ecmascript语法)
  - [预览打包后网站效果](#预览打包后网站效果)

## 环境变量

新建两个环境变量文件.env.development、.env.production，内容分别如下

```.env.development
project=APP1

VUE_APP_TOKEN=1111111
```

```.env.production
project=APP1

VUE_APP_TOKEN=222222
```

package.json处加入构建命令

```json
"scripts": {
  "start:dev": "bnr --path=./.env.development dev",
  "start:prod": "bnr --path=./.env.production build"
},
"betterScripts": {
  "dev": {
    "command": "webpack-dev-server --config webpack.config.dev.js",
    "env": {
      "NODE_ENV": "development"
    }
  },
  "build": {
    "command": "webpack --config webpack.config.prod.js",
    "env": {
      "NODE_ENV": "production"
    }
  }
}
```

webpack配置文件

```javascript
const webpack = require("webpack")

// 默认只处理了VUE_APP开头的变量
const customENV = Object.keys(process.env).reduce((previous, current) => {
  if (/^VUE_APP_/.test(current)) previous[current] = process.env[current]
  return previous
}, {})

plugins: [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(customENV)
  })
]

```

使用环境变量

```vue
<template>
  <div>{{ token }}</div>
</template>
<script>
export default {
  data() {
    return {
      token: process.env.VUE_APP_TOKEN
    }
  }
}
</script>
```

## babel配置

常用的babel插件

```shell
npm i babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-runtime babel-plugin-add-module-exports --save-dev
```

.babelrc

```json
{
    "presets":["@babel/preset-env"],
    "plugins": [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-transform-runtime",
      "babel-plugin-add-module-exports"
    ]
}
```

webpack.config.js

```javascript
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
```

## html配置

```shell
npm i html-webpack-plugin --save-dev
```

```javascript
plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './index.html'),
        inject: true
    })
]
```

## 图片处理

```shell
npm i url-loader file-loader --save-dev
```

```javascript
module: {
  rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          esModule: false, // 不加有时候会出现[object module]
          limit: 1024 // 图片体积小于1KB转成base64位处理
        }
      }
  ]
}
```

## gzip压缩

```shell
npm i compression-webpack-plugin --save-dev
```

```javascript
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const webpackConfig = {  }

if (isPord) {
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin()
  )
}
```

## 打包详细耗时

```shell
npm i speed-measure-webpack-plugin --save-dev
```

```javascript
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin()

const webpackConfig = {  }

smp.wrap(webpackConfig)
```

## 打包文件查看

```shell
npm i speed-measure-webpack-plugin --save-dev
```

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = {  }

webpackConfig.plugins.push(
    new BundleAnalyzerPlugin()
)
```

## 打包时删除旧dist

```shell
npm i clean-webpack-plugin --save-dev
```

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfig = {  }

if (isProd) {
  webpackConfig.plugins.push(
    new CleanWebpackPlugin()
  )
}

```

## 检测打包后bundle是否满足指定ECMAScript语法

```shell
npm i webpack-bundle-syntax-check-plugin --save-dev
```

```javascript
const BundleSyntaxCheckerPlugin= require("webpack-bundle-syntax-check-plugin");

const webpackConfig = {
  plugins: [
    new BundleSyntaxCheckerPlugin({esVersion: 5}),
  ]
}
```

## 预览打包后网站效果

```shell
npm i http-server --save-dev
```

package.json

```json
"start:preview": "npm run build:prod && http-server ./dist --cors"
```
