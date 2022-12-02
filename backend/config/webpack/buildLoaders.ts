import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
    };
    return [typeScriptLoader]
}