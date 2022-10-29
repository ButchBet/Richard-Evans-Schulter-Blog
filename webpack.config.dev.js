const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/fonts/[name].[contenthash].[ext]',
        clean: true,
    },

    mode: 'development',

    resolve: {
        extensions: ['.js'],
        alias: {
            "@fonts": path.resolve(__dirname, 'src/assets/fonts'),
            "@images": path.resolve(__dirname, 'src/assets/images'),
            "@components": path.resolve(__dirname, 'src/assets/components'),
            "@styles": path.resolve(__dirname, 'src/styles'),
        }
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
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                    outputPath: './assets/images/',
                    publicPath: './assets/images/'   
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

        new miniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),
    ],

    // devServer: {
    //     static: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 3006,
    //     open: true,
    // },
    
    watch: true,
}