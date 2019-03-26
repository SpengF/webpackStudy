const path = require('path');
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:  path.join(__dirname,"./src/index.js"),//已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname,"./dist"),//打包后的文件存放的地方
    filename: "index.js"//打包后输出文件的文件名
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
  })
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    inline: true,
    port:'8085'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }
            ]
        }
    ]
  }
}