var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("'extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    js: ['babel-polyfill', './frontend/index.jsx']
  },
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-2']
        }
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx", ".scss"],
    root: [
      path.resolve('./frontend')
    ]
  }
};
