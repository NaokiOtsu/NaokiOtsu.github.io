const path = require('path');
const webpack = require('webpack');

const src_path = path.resolve(__dirname, 'src');
const docs_path = path.resolve(__dirname, 'docs');

const is_production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: `${src_path}/javascripts/app.js`,

  output: {
    path: `${docs_path}/javascripts`,
    filename: '[name].bundle.js'
  },

  devServer: {
    contentBase: docs_path
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: is_production
    ? [
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
    : []
}