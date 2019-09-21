const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  productionSourceMap: false
}

if (isDevelopment) {
  config.pages = {
    index: { entry: 'example/main.ts', template: 'example/index.html' }
  }
}

module.exports = config
