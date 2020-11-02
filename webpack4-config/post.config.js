const isProd = process.env.NODE_ENV === 'production'

const plugins =  [  
    require('precss'),
    require('postcss-preset-env'),
    require('postcss-import'),
    require('postcss-pxtorem')({
        rootValue: 100,
        selectorBlackList: ['norem'],
        propList: ['*', '!border'],
        exclude: /node_modules|norem/i
    })
]

if (isProd) plugins.push(require('cssnano'))

module.exports = {
    plugins
}