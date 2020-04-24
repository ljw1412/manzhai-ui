import Vue from 'vue'
import Stack from '@/classes/Stack'

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
