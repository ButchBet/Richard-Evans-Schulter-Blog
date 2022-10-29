const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node__modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [

        ]
    },

    watch: true,
}