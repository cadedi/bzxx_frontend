module.exports = {
  productionSourceMap:false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    port:9090,
    proxy: {
      "/bzxx": {
        target: "http://localhost:8080/",
      },
    },
  },
};