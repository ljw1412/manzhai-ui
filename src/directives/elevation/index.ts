import { VNodeDirective, VNode } from 'vue'

function elevation(z: string | number) {
  return `mz-elevation-${z}`
}

export const Elevation = {
  bind: (el: HTMLElement, binding: VNodeDirective, node: VNode) => {
    if (binding.value) {
      el.classList.add(elevation(binding.value))
      el._elevation = binding.value
    }
  },
  unbind: (el: HTMLElement) => {},
  update: (el: HTMLElement, binding: VNodeDirective) => {
    if (binding.value) {
      if (el._elevation) el.classList.remove(elevation(el._elevation))
      el.classList.add(elevation(binding.value))
      el._elevation = binding.value
    }
  }
}

export default Elevation
