import webpack from "webpack";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { BuildEnv, BuildPath } from "./config/webpack/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "app", "index.ts"),
    build: path.resolve(__dirname, "build"),
  };

  const mode = "development";
  const isDev = mode === "development";
  const PORT = env.port || 5000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths,
    isDev,
    port: PORT,
  });
  return config;
};
