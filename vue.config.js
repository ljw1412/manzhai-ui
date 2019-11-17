const webpack = require('webpack')
const { resolve } = require('path')
const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  pages: {
    index: { entry: 'example/main.ts', template: 'example/index.html' }
  },
  publicPath: isDevelopment ? '/' : '',
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
  }
}

module.exports = config
