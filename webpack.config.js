const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app/components'),
      'node_modules'
    ],
    alias: {
      applicationStyles: path.join(__dirname, 'app/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0']
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new ExtractTextPlugin('public/styles.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [autoprefixer]
      }
    })
  ],
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
