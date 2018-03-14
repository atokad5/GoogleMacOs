const path = require('path');

module.exports = {
  entry: './src/_js/app.js',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'bundle.js',

  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        presets: ['env']
      },
    }]

  }

}