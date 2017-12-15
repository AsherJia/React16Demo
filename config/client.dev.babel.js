const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const hotMiddlewareScript = 'webpack-hot-middleware/client'

module.exports = {
    name: 'client',
    target: 'web',
    devtool: 'inline-source-map',
    entry: {
        index: [path.resolve(__dirname, '../src/index'), hotMiddlewareScript]
    },

    devServer: {
        contentBase: './dist',
        hot: true
    },

    output: {
        path: path.resolve(__dirname, '../build/client'),
        filename: '[name].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new WriteFilePlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'React16Demp',
        //     template: 'template.html',
        //     inject: true
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
