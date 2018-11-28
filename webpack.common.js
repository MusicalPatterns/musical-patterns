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
        mainFields: ['patternModule', 'browser', 'module', 'main'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Musical Patterns',
        }),
    ],
}
