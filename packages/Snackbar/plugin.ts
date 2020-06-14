import Vue from 'vue'
import MzSnackbar from './Snackbar'
import MzButton from 'manzhai-ui/packages/Button/Button'
import MzIcon from 'manzhai-ui/packages/Icon/Icon.vue'
import Queue from 'manzhai-ui/src/classes/Queue'

const queue = new Queue()
let instance: any
let currentSnackbar

function addCloseBtn() {
  const h = instance.$createElement
  instance.$slots.suffix = [
    h(
      MzButton,
      {
        props: { textColor: '#fff', size: 'small', icon: true, circle: true },
        on: {
          click: () => {
            instance.visible = false
          }
        }
      },
      [
        h(MzIcon, {
          props: { name: 'close', size: 20 }
        })
      ]
    )
  ]
}

function initInstance() {
  if (!instance) {
    instance = new MzSnackbar({ el: document.createElement('div') })
    addCloseBtn()
    instance.$on('visible:change', (val: boolean) => {
      instance.visible = val
    })
  }
  instance.visible = false
  instance.fixed = true
  instance.appendToBody = true
}

function showNextSnackbar() {
  initInstance()
  if (!queue.isEmpty()) {
    currentSnackbar = queue.pop()
    let options = currentSnackbar.options
    for (let prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        instance[prop] = options[prop]
      }
    }

    Vue.nextTick(() => {
      instance.visible = true
    })
  }
}

function show(options: Record<string, any> = {}) {
  queue.push({ options })
  showNextSnackbar()
}

function hide() {
  initInstance()
}

export default { show, hide }
