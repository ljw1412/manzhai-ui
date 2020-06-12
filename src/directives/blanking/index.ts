import { DirectiveBinding } from 'vue/types/options'
import { VNode } from 'vue'
import { typeOf } from 'manzhai-ui/src/utils/assist'
import { getState, setState } from 'manzhai-ui/src/utils/blanking'

export const Blanking = {
  bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    let data = binding.value
    if (!data) data = binding.expression
    if (typeOf(data) === 'object') data = data.key
    if (typeOf(data) === 'string') {
      if (getState(data)) {
        vnode.elm = new Comment()
      }
    }
  },

  inserted(el: HTMLElement, binding: DirectiveBinding) {},

  update(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const data = binding.value
    if (typeOf(data) === 'object' && !data.display) {
      setState(data.key)
      if (!vnode.componentInstance) {
        ;(vnode.elm as HTMLElement).outerHTML = '<!---->'
        vnode.elm = new Comment()
      }
    }
  },

  unbind(el: HTMLElement) {}
}

export default Blanking
