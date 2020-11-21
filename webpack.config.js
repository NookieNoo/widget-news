const path = require('path');
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');

module.exports = {
    entry: './src/frontend/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[contenthash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/frontend/index.html',
        }),
        new CleanWebpackPlugin(),
        new WebpackNotifierPlugin(),
        new WebpackBar({ reporters: ['profile'], profile: true }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ],
    watch: true,
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: process.env.FRONTEND_PORT,
    },
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, 'src/frontend'),
            '@app-universal': path.resolve(__dirname, 'src/frontend/components/universal/'),
            '@app-pages': path.resolve(__dirname, 'src/frontend/components/pages/'),
            '@app-helpers': path.resolve(__dirname, 'src/frontend/helpers/'),
            '@app-actions': path.resolve(__dirname, 'src/frontend/actions/index.js'),
            '@images': path.resolve(__dirname, 'public/images/'),
            '@styles': path.resolve(__dirname, 'src/frontend/styles/'),
        },
    },
};
