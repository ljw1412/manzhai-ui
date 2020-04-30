import Vue from 'vue'
import Stack from '@/classes/Stack'

let zIndex = 1000
let idSeed = 1

if (!Vue.prototype.$isServer) {
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      const modal = PopupManager.modalStack.top()
      if (modal && modal.closeOnPressEscape) {
        modal.close()
      }
    }
  })
}

const instances: Record<string, any> = {}

const PopupManager = {
  zIndex,
  popupId: 'popup-' + idSeed,
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
Object.defineProperties(PopupManager, {
  zIndex: {
    get() {
      return zIndex++
    }
  },
  popupId: {
    get() {
      return 'popup-' + idSeed++
    }
  }
})

export default PopupManager
