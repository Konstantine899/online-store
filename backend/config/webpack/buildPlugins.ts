import webpack from "webpack";
import NodemonPlugin from "nodemon-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins(options: BuildOptions): webpack.ProgressPlugin[] {
  const { port } = options;
  return [
    new NodemonPlugin({
      env: {
        PORT: port,
      },
    }),
    new webpack.DefinePlugin({
      PORT: JSON.stringify(port),
    }),
    new webpack.ProgressPlugin(),
  ];
}
