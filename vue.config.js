const path = require('path');
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.module
      .rule("css")
      .test(/\.css$/)
      .oneOf("vue")
      .resourceQuery(/\?vue/)
      .use("px2rem")
      .loader("px2rem-loader")
      .options({
        remUnit: 75,
      });
  },
};

module.exports = {
  //代理
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
  configureWebpack: (config) => {
    config.resolve = {
      extensions: [".js", ".json", ".vue"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    };
  },
};
