const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].chunk.js",
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  }
}
