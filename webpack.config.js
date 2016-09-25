module.exports = {
  entry: './src/index',

  output: {
    filename: './bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
