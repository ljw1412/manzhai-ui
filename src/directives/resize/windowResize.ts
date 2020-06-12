import { VNodeDirective } from 'vue'

interface ResizeVNodeDirective extends VNodeDirective {
  value?: () => void
  options?: boolean | AddEventListenerOptions
}

export const WindowResize = {
  inserted(el: HTMLElement, binding: ResizeVNodeDirective) {
    const callback = binding.value!
    const options = binding.options || { passive: true }

    window.addEventListener('resize', callback, options)
    el._onWindowResize = { callback, options }

    if (binding.modifiers && !binding.modifiers.quite) {
      callback()
    }
  },

  unbind(el: HTMLElement) {
    if (!el._onWindowResize) return
    const { callback, options } = el._onWindowResize
    window.removeEventListener('resize', callback, options)
    delete el._onWindowResize
  }
}

export default WindowResize
