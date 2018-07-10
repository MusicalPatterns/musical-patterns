const path = require('path')

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
			{
				test: /\.wav/,
				loader: 'file-loader',
			},
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
    }
}
