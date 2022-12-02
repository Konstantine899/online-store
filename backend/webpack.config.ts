import webpack from "webpack";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { BuildPath } from "./config/webpack/types/config";
import path from "path";

const paths: BuildPath = {
  entry: path.resolve(__dirname, "src", "app", "index.ts"),
  build: path.resolve(__dirname, "build"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
