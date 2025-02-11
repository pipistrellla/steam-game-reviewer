const webpack = require("webpack");

module.exports = function overrideDev(config) {
  console.log("Загружена конфигурация для разработки");


  config.devtool = "cheap-module-source-map";
  config.stats = "errors-only";

  config.devServer = {
    ...config.devServer,
    port: config.env?.port || 3000,
    open: true,
  };

  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.STEAM_API_KEY": JSON.stringify(process.env.STEAM_API_KEY),
    })
  );

  return config;
};