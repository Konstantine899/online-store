import webpack from "webpack";
import NodemonPlugin from "nodemon-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins(options: BuildOptions): webpack.ProgressPlugin[] {
  const { port, DB } = options;
  return [
    new NodemonPlugin({
      env: {
        PORT: port,
      },
    }),
    new webpack.DefinePlugin({
      PORT: JSON.stringify(port),
      DB: JSON.stringify(DB),
    }),
    new webpack.ProgressPlugin(),
  ];
}
