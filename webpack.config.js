const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

const BUILD_DIR = path.resolve(__dirname, '');
const APP_DIR = path.resolve(__dirname, 'client/app');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.(css|scss)$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        use: {
          loader: 'file-loader',
          query: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('style.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
