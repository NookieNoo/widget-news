const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { join } = require('path');
const outputPath = join(process.cwd(), '/dist');
const options = { 
    port: 22001,
    static: outputPath,
    progress: 'minimal',
    liveReload: true,
    status: true,
 };

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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new Serve(options),
    new CleanWebpackPlugin(),
    
  ],
  watch: true,
  mode: 'development'
};