var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    comp1: './components/comp1/index.js',
    comp2: './components/comp2/index.js',
    common: './index.js'
  },
  output: {
    path: __dirname + '/app',
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV === 'development'
    }),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/
      }
    ]
  }
};
