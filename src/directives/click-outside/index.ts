import { VNodeDirective } from 'vue/types/vnode'
import { DirectiveBinding } from 'vue/types/options'

export const ClickOutside = {
  inserted(el: HTMLElement, binding: DirectiveBinding) {
    const documentHandler = (e: Event) => {
      if (el.contains(e.target as Node)) return

      binding.value(e)
    }
    el._clickOutside = documentHandler
    document.addEventListener('click', documentHandler)
  },

  unbind(el: HTMLElement) {
    if (el._clickOutside) {
      document.removeEventListener('click', el._clickOutside)
      delete el._clickOutside
    }
  }
}

export default ClickOutside
