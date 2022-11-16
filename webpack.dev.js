const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = merge(common, {
   mode: 'development',
   // permet d'afficher la bonne ligne pour le débogage
   devtool: 'inline-source-map',
   plugins: [
    new MiniCssExtractPlugin()
  ],
   output: {
    filename: '[name].js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  devServer:{
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
    // Auto refresh
    hot: true
  },
 });