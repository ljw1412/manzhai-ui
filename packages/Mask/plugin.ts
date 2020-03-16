import Mask from './Mask'
import { MaskConfig } from './Mask.d'

let instance: any

function initInstance() {
  if (!instance) {
    instance = new Mask({ el: document.createElement('div') })
  }
}

function show(config?: MaskConfig) {
  initInstance()
  if (config) {
    for (let prop in config) {
      if (Object.prototype.hasOwnProperty.call(config, prop)) {
        instance[prop] = config[prop as keyof MaskConfig]
      }
    }
  }

  instance.appendToBody = true
  instance.value = true
}

function hide() {
  initInstance()
  instance.value = false
}

export default { show, hide }
