const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      /* 
        element按需引入
      */
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }

  // 配置方式一：cli提供的属性
  // 打包位置
  // outputDir: './build'

  // 配置方式二： 和webpack属性完全一致
  // 通过webpack-merge 合并到webpack中, 这个对象中的属性和webpack中的属性全都一样
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       // @ webpack默认配置等于 src
  //       components: '@/components'
  //     }
  //   }
  // }

  // 函数会替代原来的，所以需要重写@
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }

  // 配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
})
