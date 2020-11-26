require('webpack')
const path = require('path')

const plugins = []

const config = {
    entry: {
        sample: './samples/documentation/sample.ts',
        clusteringDataset: './samples/documentation/datasets/clustering.ts'
    },
    plugins,
    output: {
        path: path.resolve(__dirname, 'dist/documentation'),
        filename: '[name].js'
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
