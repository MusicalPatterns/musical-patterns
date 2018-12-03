const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /test/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Musical Patterns',
        }),
        new CopyWebpackPlugin([{
            from: 'node_modules/@musical-patterns/playroom/dist/*.wav',
            to: path.join(__dirname, './dist'),
            flatten: true,
        }]),
    ],
}
