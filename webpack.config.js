const commonConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = (env) => {
  console.log(env)
  envConfig = require(`./webpack.${env.mode}`)
  return webpackMerge({mode: env.mode}, commonConfig, envConfig)
}
