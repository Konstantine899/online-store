import webpack from "webpack";
import NodemonPlugin from "nodemon-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins(options: BuildOptions): webpack.ProgressPlugin[] {
  const { port, DB, isDev, paths } = options;
  return [
    new NodemonPlugin({
      watch: [paths.nodemon_watch],
      ext: "js",
      verbose: true,
      env: {
        PORT: port,
        NODE_ENV: isDev,
      },
    }),
    new webpack.DefinePlugin({
      PORT: JSON.stringify(port),
      DB: JSON.stringify(DB),
      FILES_PATH: JSON.stringify(paths.files),
    }),
    new webpack.ProgressPlugin(),
  ];
}
