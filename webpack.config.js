const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [new CopyWebpackPlugin([{ from: "static" }])]
};
