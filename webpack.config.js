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