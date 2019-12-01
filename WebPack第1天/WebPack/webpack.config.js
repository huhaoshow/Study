//引入path模块
const path = require('path');
// 导入提取样式的webpack插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 导入管理输出插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入清除dist插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 暴露配置文件
module.exports = {
    // 项目入口,webpack从这个路径中读取
    entry: './src/main.js',    //相对路径,但必须要有./或者是../
    // 打包的输出结果
    output: {
        // 打包后的文件存放位置
        path: path.resolve('dist'),     //必须要是绝对路径,path.resolve可以自动补全绝对路径
        filename: 'bundle.js'           //打包后的文件的文件名,默认为bundle.js
    },
    // 生成映射源代码文件
    devtool: "source-map",      //生成映射文件,错误追踪时需要使用到
    // 开发服务配置
    devServer: {
        port: 8000   //默认端口是8080
    },
    // 模块加载器配置项
    module: {
        rules: [
            // 加载css
            // {
            //     test: /\.css$/,  //正则表达式,匹配css扩展名文件
            //     //配置loader加载器
            //     use: [
            //         'style-loader',     // style-loader:把css代码写人到网页中
            //         'css-loader'        // css-loader:读取css的代码
            //     ]
            // },
            // 加载less
            // {
            //     test: /\.less$/,		// 匹配less扩展名文件
            //     use: [
            //         'style-loader',		// 把less代码写入到网页中
            //         'css-loader',		// 读取less的代码
            //         'less-loader'		// 解释编译less代码
            //     ]
            // },
            // 提取css
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({	// 提取css
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // 提取less
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({	// 提取less
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            // 加载图片
            {
                test: /\.(png|svg|jpg|gif)$/,	// 匹配图片文件
                use: [
                    {
                        loader: "file-loader",              // 处理图片文件返回链接
                        options: {
                            publicPath: "./images/",   		//  引入图片时会在路径前面加上该项
                            outputPath: "images"            //  输出到dist下的images目录
                        }
                    }
                ]
            }
        ]
    },
    // 插件配置项
    plugins: [
        // 调用清除打包目录插件
        new CleanWebpackPlugin(),   //在生成新的index之前,将打包目录清空,节约空间
        // 调用提取样式插件
        new ExtractTextPlugin('style/style.css'), // 提取到dist的style文件夹中
        // 调用管理输出插件
        new HtmlWebpackPlugin({
            template: "public/main.html"	// template指定默认html模板
        })
    ]
};