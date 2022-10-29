const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[ext]',
        open: true;
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

    plugins: {

    },

    optimization: {
        minimize: true,
        minimizer: [

        ]
    },

    watch: true,
}