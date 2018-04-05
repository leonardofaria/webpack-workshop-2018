console.log('hello from dev');

module.exports = {
  devtool: 'source-map',
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
