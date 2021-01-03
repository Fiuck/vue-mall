const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      // 配置目录别名
      alias: {
        // '@': path.resolve('src'),
        components: "@/components",
        assets: "@/assets",
        common: "@/common",
        views: "@/views",
        network: "@/network",
      },
    },
  },
  devServer: {
    port: 8000,
    // 自动打开浏览器
    open: true,
  },
};
