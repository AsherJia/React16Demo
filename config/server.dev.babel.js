const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')

const res = p => path.resolve(__dirname, p)

// const nodeModules = res('../node_modules')
const entry = res('../server/render.js')
const output = res('../build/server')

module.exports = {
    name: 'server',
    target: 'node',
    devtool: 'inline-source-map',
    entry: [entry],

    output: {
        path: output,
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new WriteFilePlugin()
    ]
}
