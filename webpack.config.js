/**
 * @description: webpack配置文件
 */
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptiomizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: 'index.min.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // less解析
      {
        test: /\.less$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      // css解析
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
      // 排除 css js html 文件
      // { exclude: /\.(css|js|html)/, loader: 'file-loader' }
    ]
  },
  externals: {
    Swiper: 'Swiper'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:
        process.env.NODE_ENV === 'development'
          ? 'css/[name].min.css'
          : 'css/[name].[contenthash:8].css'
    }),
    new OptiomizeCssAssetsWebpackPlugin()
  ],
  mode: process.env.NODE_ENV,
  devServer: {
    // 构建后的路径
    contentBase: resolve(__dirname, 'dist'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    hot: true
  }
}
