const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : './src/index.js',
  output : {
    path: './',
    filename: 'public/js/index.js'
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/styles/main.css', {
      allChunks: true
    })
  ]
};