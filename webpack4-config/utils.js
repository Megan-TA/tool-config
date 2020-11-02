const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

const isProd = process.env.NODE_ENV === 'production'

exports.cssLoaders = function (options = {}) {
    var cssLoader = {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      }
    }
  
    const postCssLoader = {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            'precss'
          ],
        },
      }
    }
  
    // generate loader string to be used with extract text plugin
    function generateLoaders (loader, loaderOptions) {
      var loaders = [cssLoader]
  
      if (isProd) loaders.unshift(ExtractCssChunks.loader)
  
      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions)
        })
      } else {
        loaders.push(postCssLoader)
      }
      return ['vue-style-loader'].concat(loaders)
    }
  
    return {
      css: generateLoaders(),
      postcss: generateLoaders('postcss'),
      less: generateLoaders('less')
    }
  }
  
  // Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options = {}) {
var output = []
var loaders = exports.cssLoaders(options)

for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
    test: new RegExp('\\.' + extension + '$'),
    use: loader
    })
}

return output
}
