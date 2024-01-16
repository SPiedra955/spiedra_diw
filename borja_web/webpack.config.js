'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/bootstrap-5.3.2/scss/bootstrap.scss',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
  ],
  output: {
    filename: 'js/all.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/, // Coincide con archivos .scss y .sass
        use: [
          'style-loader', // Carga CSS en un elemento <style>
          'css-loader',   // Convierte CSS en módulos de JavaScript
          'sass-loader'   // Compila Sass a CSS
        ],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
};
