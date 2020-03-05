import ImagePreview from './ImagePreview.vue'
import { ImagePreviewConfig } from './ImagePreview'

let instance: any

const initInstance = () => {
  if (!instance) {
    instance = new ImagePreview({ el: document.createElement('div') })
    instance.$on('update:visible', (val: boolean) => {
      instance.visible = val
    })
  }
}

function baseConfig() {
  return {
    thumbnail: true,
    playable: true,
    actionbar: true,
    loop: true,
    appendToBody: true
  }
}

function show(config?: ImagePreviewConfig) {
  initInstance()
  if (config) {
    config = Object.assign(baseConfig(), config)
    for (let prop in config) {
      if (Object.prototype.hasOwnProperty.call(config, prop)) {
        instance[prop as keyof ImagePreviewConfig] =
          config[prop as keyof ImagePreviewConfig]
      }
    }
  }
  instance.visible = true
}

function hide() {
  initInstance()
  instance.visible = false
}

export default { show, hide }
