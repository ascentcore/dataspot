require('webpack')
const path = require('path')
const glob = require('glob')

const plugins = []

function srcPaths(src) {
    return path.join(__dirname, src)
}
const entry = {}
const files = glob.sync('samples/documentation/**/*.ts', {})
files.forEach((item) => {
    let fileName = item.substr(item.lastIndexOf('/') + 1).slice(0, -3)
    entry[fileName] = `./${item}`
})

console.log(entry)

const config = {
    entry,
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
