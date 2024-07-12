import path from 'path';
import webpack from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";
import {IBuildOptions, IBuildPaths} from "./config/types/types";



export default (env:IBuildOptions) => {

    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';

    const paths:IBuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
    }

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? "development",
        port: env.port ?? 8080 ,
        paths
    })
    return config;
}

