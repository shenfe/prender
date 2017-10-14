const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const cwd = process.cwd();

module.exports = {
    context: path.resolve(cwd, 'src'),
    entry: [
        // 'babel-polyfill',
        './index.js'
    ],
    output: {
        path: path.resolve(cwd, 'dist'),
        filename: 'prpl.js',
        library: 'PRPL',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
    ]
};
