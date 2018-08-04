const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/songLoop.ts',
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                loader: 'worker-loader',
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.wav/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: [ ".ts", ".js" ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist')
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Fun Musical Tool',
    })],
}
