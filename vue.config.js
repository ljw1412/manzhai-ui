const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  pages: {
    index: { entry: 'example/main.ts', template: 'example/index.html' }
  },
  publicPath: isDevelopment ? '/' : '',
  productionSourceMap: false
}

module.exports = config
