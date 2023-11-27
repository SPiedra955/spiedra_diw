const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/main.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new CopyPlugin({
      patterns: [ 
          {
              from: path.resolve(__dirname, "src", "img"),
              to: "img"
          } 
      ]
  }),
  ],
  output: {
    filename: '[name].bundle.js',
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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/, // Coincide con archivos .css
        use: [
          'style-loader', // Carga CSS en un elemento <style>
          'css-loader',   // Convierte CSS en módulos de JavaScript
        ],
      },
      
    ],
  },
  stats: {
    errorDetails: true,
  },
};
