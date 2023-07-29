const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const packageJSON = require("./package.json");

module.exports = [
  {
    // entry: "./src/client/index.tsx",
    entry: "./src/index.tsx",
    mode: "development",
    target: "web",
    output: {
      // path: path.resolve(__dirname, "dist/client"),
      path: path.resolve(__dirname, "dist"),
      // path: path.resolve(__dirname, 'public'),
      filename: "client_bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        // template: "./src/client/index.html",
        // filename: "index.html", // Write the file to <public-path>/index.html
        inject: true, //Don inject any of your project assets into the template
        // template: "./src/index.html",
        // template: "index.html"
        template: "./public/index.html"
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
  },
];


