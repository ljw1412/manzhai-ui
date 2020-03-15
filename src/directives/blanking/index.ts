import { DirectiveBinding } from 'vue/types/options'
import { VNode } from 'vue'

export const Blanking = {
  bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {},

  inserted(el: HTMLElement, binding: DirectiveBinding) {},

  update(el: HTMLElement, binding: DirectiveBinding) {},

  unbind(el: HTMLElement) {}
}

export default Blanking
