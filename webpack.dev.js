// Note this only includes basic configuration for development mode.
// For a more comprehensive configuration check:
// https://github.com/fable-compiler/webpack-config-template
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: "development",
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        port: 8080,
    },
})
