const htmlWebPack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const Copy = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /style.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /style.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
      },
    ],
  },

  optimization: {},
  plugins: [
    new htmlWebPack({
      title: "Julio Roca",
      /* filename:'Hola Mundo.html' */
      template: "./src/index.html",
    }),
    new MiniCssExtract({
      filename: "[name].css",
      ignoreOrder: false,
    }),
    new Copy({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
