const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   plugins: [
    new MiniCssExtractPlugin({
      // mise en cache
      filename: '[name].[contenthash].css',
    })
  ],
   output: {
    // mise en cache
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]'
  },
 });