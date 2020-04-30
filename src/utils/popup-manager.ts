import Vue from 'vue'
import Stack from '@/classes/Stack'

let zIndex = 1000
export const modalStack = new Stack()

if (!Vue.prototype.$isServer) {
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      const modal = modalStack.top()
      if (modal && modal.closeOnPressEscape) {
        modal.close()
      }
    }
  })
}

const instances: Record<string, any> = {}

const PopupManager = {
  zIndex,
  modalStack: new Stack(),

  bind(id: string, instance: any) {
    if (id && instance) {
      instances[id] = instance
    }
  },

  unbind(id: string) {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  }
}

// 每次获取zIndex后，zIndex会自增
Object.defineProperty(PopupManager, 'zIndex', {
  get() {
    return zIndex++
  }
})

export default PopupManager
