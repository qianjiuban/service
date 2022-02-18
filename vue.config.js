const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    // disableHostCheck: true,
    open: false,
    port: 8888,
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.less/, //匹配文件名
            threshold: 10240, //对超过10k的数据进行压缩
            deleteOriginalAssets: false, //是否删除原文件
          }),
        ],
      };
    }
  },
};
