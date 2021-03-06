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
    },
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'assets', 'images')],
        compress: true,
        port: 4500
    }
}

module.exports = config
