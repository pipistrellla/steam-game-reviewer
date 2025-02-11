const webpack = require("webpack");

module.exports = function overrideProd(config) {
  console.log("Загружена конфигурация для деплоя");
  config.optimization.minimize = true;

  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.STEAM_API_KEY": JSON.stringify(process.env.STEAM_API_KEY),
    })
  );

  return config;
};