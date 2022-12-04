import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import nodeExternals from "webpack-node-externals";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),

    plugins: buildPlugins(options),
    // Выпиливаю node_modules из сборки
    externals: [nodeExternals()],
  };
}
