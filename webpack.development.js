const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      }
    ]
  }
}
