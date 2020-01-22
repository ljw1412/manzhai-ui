import Vue from 'vue'
import MzSnackbar from './index'
import { SnackbarPluginOptions, SnackbarConstructor } from './Snackbar'
import Queue from '@/classes/Queue'

const queue = new Queue()
let instance: SnackbarConstructor
let currentSnackbar

const Snackbar = {
  show: (options: SnackbarPluginOptions) => {
    if (Vue.prototype.$isServer) return
    options.fixed = true
    queue.push({ options })

    showNextSnackbar()
  },

  close: () => {
    initInstance()
  }
}
const initInstance = () => {
  if (!instance) {
    instance = new MzSnackbar({
      el: document.createElement('div')
    })
    instance.$on('input', (val: boolean) => {
      instance.value = val
    })
  }
  instance.value = false
}

const showNextSnackbar = () => {
  initInstance()
  if (!queue.isEmpty()) {
    currentSnackbar = queue.pop()
    let options = currentSnackbar.options
    for (let prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        instance[prop as keyof SnackbarPluginOptions] = options[prop]
      }
    }
    instance.$on('buttonClick', options.buttonClick.bind(Snackbar))

    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
      instance.show()
    })
  }
}

export default Snackbar
