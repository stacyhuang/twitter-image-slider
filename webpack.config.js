var path = require('path');

module.exports = {
  entry: './src/index',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
