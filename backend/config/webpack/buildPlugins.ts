import webpack from "webpack";

export function buildPlugins(): webpack.ProgressPlugin[] {
    return [new webpack.ProgressPlugin()]
}