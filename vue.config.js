const { defineConfig } = require('@vue/cli-service')

const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8802,
    proxy: {
      '/api': { // 需要跨域的请求路径，比如 http://localhost:8802/api/videos
        target: 'http://198.46.251.162:3000', // 跨域请求的目标地址，即后端服务器地址
        changeOrigin: true, // 开启跨域
        pathRewrite: {
          '^/api': '' // 路径重写，将请求路径中的/api替换为空
        }
      }
    },
  },
  lintOnSave: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '纯爱战士'
        return args
      })
  },
  configureWebpack: config => {
    return {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, "src"),
        },
      }
    }
  }
})
