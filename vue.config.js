const webpack = require('webpack')
const { resolve, relative } = require('path')
const isDevelopment = process.env.NODE_ENV !== 'production'
const isUI = process.env.MARK_ENV === 'UI'

const config = {
  pages: {
    index: { entry: 'example/main.ts', template: 'example/index.html' }
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/manzhai-ui/' : '/',
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
        '@example': resolve('example'),
        'manzhai-ui': resolve('.')
      }
    },
    performance: {
      hints: false
    }
  },
  // chainWebpack: config => {},
  css: {
    // extract: !isDevelopment && !isUI,
    loaderOptions: {
      scss: {
        prependData: ({ resourcePath, rootContext }) => {
          const relativePath = relative(rootContext, resourcePath)
          // 避免文档使用manzhai导致scss颜色变量提前被css variable覆盖
          // 出现 --color-primary: var(--color-primary) 的问题
          if (relativePath.startsWith('packages')) {
            return "@import '@/styles/variables.scss';"
          } else if (
            relativePath.startsWith('example') &&
            !relativePath.includes('styles')
          ) {
            return "@import '@example/styles/manzhai-variables.scss';"
          }
          return ''
        }
      }
    }
  }
}

module.exports = config
