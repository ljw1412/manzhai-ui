import { VNodeDirective, VNode } from 'vue'
import tippy from 'tippy.js'

function updataTippy(el: HTMLElement, binding: VNodeDirective) {
  if (binding.value === binding.oldValue) return
  if (el._tooltip) el._tooltip.destroy()
  let options = { content: '' }
  if (typeof binding.value === 'string') {
    options.content = binding.value
  } else if (typeof binding.value === 'object') {
    options = binding.value
  }
  el._tooltip = tippy(el, options)
}

export const Tooltip = {
  bind: (el: HTMLElement, binding: VNodeDirective, node: VNode) => {
    updataTippy(el, binding)
  },
  unbind: (el: HTMLElement) => {
    if (!el._tooltip) return
    el._tooltip.destroy()
    delete el._tooltip
  },
  update: (el: HTMLElement, binding: VNodeDirective) => {
    updataTippy(el, binding)
  }
}

export default Tooltip
