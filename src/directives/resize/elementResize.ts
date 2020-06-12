import { VNodeDirective } from 'vue'
import {
  addResizeListener,
  removeResizeListener
} from 'manzhai-ui/src/utils/resize-event'

export const ElResize = {
  inserted(el: HTMLElement, binding: VNodeDirective) {
    const callback = binding.value!
    addResizeListener(el, callback)
    el._onElResize = callback
  },

  unbind(el: HTMLElement) {
    if (!el._onElResize) return
    removeResizeListener(el, el._onElResize)
    delete el._onElResize
  }
}
