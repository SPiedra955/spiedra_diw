const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/js/application.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
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
    
 };
