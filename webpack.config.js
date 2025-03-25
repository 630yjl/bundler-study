const path = require("path");

module.exports = {
  mode: "development",
  //시작점
  entry: { main: path.resolve(__dirname, "src/index.js") },
  //웹팩 작업을 통해 생성된 결과물
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"], //아래부터 순서대로 돌기때문에 순서 지켜서 써주기
      },
    ],
  },
};
