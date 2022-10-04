const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPLugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "music-shop/bundle.js",
        publicPath: "./",
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


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./", //! para el despliegue lo importante es el punto
  },
  mode: 'development',
  resolve: {
    extensions: [".js", ".jsx"],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@moneyIn': path.resolve(__dirname, 'public/moneyIn/'),
            '@styles': path.resolve(__dirname, 'src/styles/'), 
            '@icons': path.resolve(__dirname, 'public/icons/'),
            '@img': path.resolve(__dirname, 'public/img/'),
        '@logos': path.resolve(__dirname, 'public/logos/'),
		},
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|svg|jpeg|web|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: "public/[hash][ext]",
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
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 64340,
    historyApiFallback: true,
  }
}