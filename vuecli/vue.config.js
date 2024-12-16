const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: config => {
  //   config.optimization.splitChunks = {
  //     chunks: 'all'
  //   }
  // }
})
