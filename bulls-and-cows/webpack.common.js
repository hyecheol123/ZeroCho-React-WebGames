const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './bulls-and-cows/src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, '..', 'node_modules'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({ React: 'react' }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './bulls-and-cows/public/index.html' }),
  ],
};
