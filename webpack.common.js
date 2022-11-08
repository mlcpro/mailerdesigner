// résous les chemins absolue
const path = require('path');
// génére un nouveau index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entrée
  entry: {
    app: ['./assets/styles/app.scss', './assets/js/app.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mailer Designer',
      filename: 'index.html',
      template: 'public/template.html'
    })
  ],
  // sortie
  output: {
    path: path.resolve(__dirname, 'public/build'),
    // nettoie les anciens fichier
    clean: true,
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                // convertie du ES5 en vieux code
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                }
            }
        },
        {
          test: /\.scss$/i,
          use: [
            // Extrait le css dans des fichiers séparé
            MiniCssExtractPlugin.loader,
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            "css-loader",
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins:  [
                    [
                      "autoprefixer",
                    ],
                  ],
                }
              }
            },
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
    ]
  }
};