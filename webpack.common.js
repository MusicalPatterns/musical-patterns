const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Musical Patterns',
        }),
    ],
}
