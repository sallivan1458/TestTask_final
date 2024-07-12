import webpack from "webpack";
import buildDevServer from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {IBuildOptions} from "../types/types";
import {buildResolvers} from "./buildResolvers";


export function buildWebpack( options:IBuildOptions ):webpack.Configuration {

    const isDev = options.mode === 'development';
    const {mode, paths} = options

    return {
        mode: options.mode ?? "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean:true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options.port) :undefined

    }
}