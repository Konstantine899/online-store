import path from "path";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [new webpack.ProgressPlugin()],
  // Выпиливаю node_modules из сборки
  externals: [nodeExternals()],
};

export default config;
