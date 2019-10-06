import { VNodeDirective } from 'vue/types/vnode'
import { DirectiveBinding } from 'vue/types/options'

export const ClickOutside = {
  inserted(el: HTMLElement, binding: DirectiveBinding) {},

  unbind(el: HTMLElement) {}
}

export default ClickOutside
