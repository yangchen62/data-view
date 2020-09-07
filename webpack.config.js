const path = require("path");
const argv = require("yargs").argv;  //获取命令行中参数的对象
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const isDev = argv.cfg && argv.cfg === "dev";  //是否为开发模式，如果输入yarn start执行"webpack-dev-server --mode development --cfg dev"，argv.cfg获取参数的值为dev。

const config = {
    entry: isDev?"./src/dev.tsx":"./src/index.ts",
    output: {
        publicPath: "/dist/",
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
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
    devtool: isDev ? "source-map" : false    // 值为source-map时，方便在浏览器中使用react开发工具调试
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