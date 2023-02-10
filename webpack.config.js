const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// old javascript way
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'final.js',
    publicPath: '/' // nested routing 
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node-modules/,
        use: 'babel-loader',
      },
      {
        test: /.css$/,
        exclude: /node-modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true, // routing
  },
};
