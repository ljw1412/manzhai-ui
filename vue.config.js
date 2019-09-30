const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  pages: {
    index: { entry: 'example/main.ts', template: 'example/index.html' }
  },
  publicPath: isDevelopment ? '/' : '',
  productionSourceMap: false,
  devServer: {
    port: 10086
  }
}

module.exports = config
