const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPLugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "music-shop/bundle.js",
        publicPath: "/music-shop",
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@containers": path.resolve(__dirname, "src/containers/"),
            "@routes": path.resolve(__dirname, "src/routes/"),
            "@views": path.resolve(__dirname, "src/views/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@icons": path.resolve(__dirname, "public/assets/img/icons"),
            "@logos": path.resolve(__dirname, "public/assets/img/logos"),
            "@utils": path.resolve(__dirname, "src/utils/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|jpeg|webp$)/,
                type: "asset/resource",
                generator: {
                    filename: "assets/pictures/[hash][ext]",
                },
            },
            {
                test: /\.(js$|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPLugin({
            filename: "[name].css",
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 3005,
    },
};
