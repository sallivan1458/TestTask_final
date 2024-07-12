import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack,{Configuration} from "webpack";
import {IBuildOptions} from "../types/types";

export function buildPlugins({mode,paths}:IBuildOptions) :Configuration["plugins"] {

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    let plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({ template: paths.html } ),
    ]

    if (isDev){
        plugins.push( new webpack.ProgressPlugin() )
    }

    if (isProd){
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            })
        )

    }


    return plugins
}