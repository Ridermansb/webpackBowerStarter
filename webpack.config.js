var webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: [ __dirname + '/app.js' ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
               test: /\.scss$/,
               loader: 'style!css!sass?sourceMap'
           },
           {
               test: /\.css$/,
               loader: 'style!css'
           }, {
               test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
               loader: 'file-loader?name=res/[name].[ext]?[hash]'
           }
    ]
  },
  resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', 'html'],
        modulesDirectories: ['node_modules']
    },
  plugins: [
  ]
};
