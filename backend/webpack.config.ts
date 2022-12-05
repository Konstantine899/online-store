import webpack from "webpack";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { BuildDB, BuildEnv, BuildPath } from "./config/webpack/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "app", "index.ts"),
    build: path.resolve(__dirname, "build"),
  };

  const mode = "development";
  const isDev = mode === "development";
  const PORT = env.port || 5000;

  const DB: BuildDB = {
    NAME: "online_store",
    USER: "root",
    PASSWORD: "4343",
    HOST: "localhost",
    PORT: 3306,
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths,
    isDev,
    port: PORT,
    DB,
  });
  return config;
};
