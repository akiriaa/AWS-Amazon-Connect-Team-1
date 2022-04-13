const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./webpack.config");

module.exports = {
  ...config,
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    https: true,
    overlay: true,
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};