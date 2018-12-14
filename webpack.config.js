const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = {
  mode: 'development',

  devtool: 'eval',

  entry: ['./src/index.js', 'webpack-plugin-serve/client'],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },

  watch: true,

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),

    new WebpackPluginServe({
      host: '0.0.0.0',
      port: 3000,
      historyFallback: true,
      static: [path.join(__dirname, 'public'), path.join(__dirname, 'build')],
    }),
  ],
};
