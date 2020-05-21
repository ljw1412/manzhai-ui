import ImagePreview from './ImagePreview'

let instance: any

const initInstance = () => {
  if (!instance) {
    instance = new ImagePreview({ el: document.createElement('div') })
    // document.body.appendChild(instance.$el)
    instance.$on('visible:change', (val: boolean) => {
      instance.visible = val
    })
  }
}

const baseConfig = {
  appendToBody: true,
  layout: 'zoom play fullscreen download thumbnail'
}

function show(config?: Record<string, any>) {
  initInstance()
  if (config) {
    config = Object.assign({}, baseConfig, config)
    for (let prop in config) {
      if (Object.prototype.hasOwnProperty.call(config, prop)) {
        instance[prop] = config[prop]
      }
    }
  }
  console.log(instance)

  instance.visible = true
}

function hide() {
  initInstance()
  instance.visible = false
}

export default { show, hide }
