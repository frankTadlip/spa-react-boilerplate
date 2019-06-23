const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoDllWebpackPlugin = require('autodll-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true
        }),

        new AutoDllWebpackPlugin({
            inject: true, // will inject the DLL bundle to index.html
            debug: true,
            filename: '[name]_[hash].js',
            path: './',
            entry: {
                vendor: [
                    'history',
                    'axios',
                    'react',
                    'react-dom',
                    'react-router-dom',
                    'react-redux',
                    'redux',
                    'react-router-redux',
                    'redux-thunk'
                ]
            }

        })
    ]
}