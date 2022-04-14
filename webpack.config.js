const path = require('path');

module.exports = {
  entry: "./public/index.html",
  module: {
    rules: [{ test: /\.jsx?$/|/\.ts|\.tsx$/, use: "babel-loader" }]
  },
  output: {
    filename: "app.js",
    path: path.resolve("dist")
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};