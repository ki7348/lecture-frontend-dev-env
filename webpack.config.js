const { resolve } = require("path");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 로더가 처리해야할 파일
        use: [path.resolve("./my-webpack-loader.js")],
      },
    ],
  },
};
