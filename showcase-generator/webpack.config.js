require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const plugins = [
    new HtmlWebpackPlugin({
        template: './index.html'
    })
]

const config = {
    entry: './src/index.tsx',
    plugins,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    }
}

module.exports = config
