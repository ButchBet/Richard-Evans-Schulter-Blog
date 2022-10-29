const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

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
            },

            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),

        new miniCssExtractPlugin(),
    ],

    optimization: {
        minimize: true,
        minimizer: [

        ]
    },

    watch: true,
}