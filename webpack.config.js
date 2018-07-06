var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');


module.exports = {
  context: __dirname,

  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: './src',
    port: 3000
  },

  devtool: debug ? "inline-sourcemap" : null,
  entry: "./dev/js/index.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src",
    filename: "js/scripts.min.js",
    publicPath: '/'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
