const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/js/slides.min.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'

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
      test: /\.s[ac]ss$/,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
     },
   ],
 },
};