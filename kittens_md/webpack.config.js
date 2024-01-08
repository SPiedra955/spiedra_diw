const path = require('path');

 module.exports = {
   entry: {
     index: './src/js/application.js',
   },
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
    
 };
