const webpack = require('webpack')
const { resolve } = require('path')
const isDevelopment = process.env.NODE_ENV !== 'production'
const isUI = process.env.MARK_ENV === 'UI'

const config = {
  pages: {
    index: { entry: 'example/main.ts', template: 'example/index.html' }
  },
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    port: 10086
  },
  configureWebpack: {
    plugins: [
      new webpack.BannerPlugin({
        banner: `Build Time: ${new Date().toString()}`
      })
    ],
    resolve: {
      alias: {
        '@packages': resolve('packages'),
        '@example': resolve('example')
      }
    },
    performance: {
      hints: false
    }
  },
  chainWebpack: config => {
    // 在 svg 规则中排除我们的图标库文件夹目录
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    // 创建 icons 规则，设置文件夹包含我们的图标库文件夹目录
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [{ removeXMLNS: true }]
      })
      .end()
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import '@/scss/index.scss';
        `
      }
    }
  }
}

module.exports = config
