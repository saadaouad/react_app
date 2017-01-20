import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry : './src/index.js',
  target: 'web',
  output : {
    path: './',
    filename: 'public/js/index.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /(\.css)$/,
        loader: ExtractTextPlugin.extract('css?source-map')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
