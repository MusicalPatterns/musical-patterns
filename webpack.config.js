const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/songLoop.js',
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                loader: 'worker-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
}
