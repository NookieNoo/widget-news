const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[contenthash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new WebpackNotifierPlugin(),
    new WebpackBar({ reporters: [ 'profile'], profile: true })
  ],
  watch: true,
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
      '@app-universal': path.resolve(__dirname, 'src/components/universal/'),
      '@app-pages': path.resolve(__dirname, 'src/components/pages/'),
      '@images': path.resolve(__dirname, 'public/images/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    }
  }
};