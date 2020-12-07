const path = require("path");
const argv = require("yargs").argv;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const isDev = argv.cfg && argv.cfg === "dev";

const config = {
    entry: isDev?"./src/dev.tsx":"./src/index.ts",
    output: {
        publicPath: "/dist/",
        filename: "[name].[hash:8].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.module\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {  // 启用 css modules, css模块化, 所有类名都默认为当前组件, 或者使用 :global 声明全局样式, 参考 AntDesignPro 的样式引用
                                localIdentName: '[name]__[local]--[hash:base64:5]',  // 指定样式名
                                getLocalIdent: getCSSModuleLocalIdent
                            },
                        }
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    },
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ // 打包输出HTML
            title: 'Hello World app',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            filename: 'index.html',
            template: './tpl/index.html'
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'cheap-module-eval-source-map'
};

if (isDev) {  // 开发模式时，启动web服务
    config.devServer = {
        openPage: '/dist',
        port: 9000,
        open: true,
        hot: false,
    };
}

module.exports = config;