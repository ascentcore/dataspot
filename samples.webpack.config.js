require('webpack')
const path = require('path')

const plugins = []

function srcPaths(src) {
    return path.join(__dirname, src)
}

const config = {
    entry: {
        sample: './samples/documentation/sample.ts',
        clusteringComparison: './samples/documentation/clustering/comparison.ts',
        benchmarkFunctions: './samples/documentation/benchmark/benchmark.ts'
    },
    plugins,
    output: {
        path: path.resolve(__dirname, 'docs/samples'),
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
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            '@ascentcore/dataspot': srcPaths('lib')
        }
    },
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'assets', 'images')],
        compress: true,
        port: 4500
    }
}

module.exports = config
