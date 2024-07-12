import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import {IBuildOptions} from "../types/types";
import autoprefixer from "autoprefixer";

export function buildLoaders({mode}:IBuildOptions): ModuleOptions['rules'] {

    const isDev = mode === "development";

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: { icon: true }
            }
        ]
    }



    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
            },
        },
    }

    const postCssLoader = {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    autoprefixer
                ]
            }
        }
    }

    const cssLoader = {
        test: /\.css$/,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            postCssLoader,
        ],
    };

    const loaderToFonts__CONSTA = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            postCssLoader,
            "sass-loader",
        ],
    }

    return[
        tsLoader,
        cssLoader,
        scssLoader,
        loaderToFonts__CONSTA

    ]
}