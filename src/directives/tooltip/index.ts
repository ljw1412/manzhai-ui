import { VNodeDirective, VNode } from 'vue'
import tippy from 'tippy.js'

function updataTippy(el: HTMLElement, binding: VNodeDirective) {
  if (binding.value === binding.oldValue) return
  if (el._tippy) el._tippy.destroy()
  let options = { content: '' }
  if (typeof binding.value === 'string') {
    options.content = binding.value
  } else if (typeof binding.value === 'object') {
    options = binding.value
  }
  el._tippy = tippy(el, options)
}

export const Tooltip = {
  bind: (el: HTMLElement, binding: VNodeDirective, node: VNode) => {
    updataTippy(el, binding)
  },
  unbind: (el: HTMLElement) => {
    if (!el._tippy) return
    el._tippy.destroy()
    delete el._tippy
  },
  update: (el: HTMLElement, binding: VNodeDirective) => {
    updataTippy(el, binding)
  }
}

export default Tooltip
