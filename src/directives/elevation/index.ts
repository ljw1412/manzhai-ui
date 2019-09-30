import { VNodeDirective, VNode } from 'vue'

function elevation(z: string | number) {
  return `mz-elevation-${z}`
}

function modifyElevation(el: HTMLElement, z: string | number) {
  if (z || z === 0) {
    if (el._elevation) el.classList.remove(elevation(el._elevation))
    el.classList.add(elevation(z))
    el._elevation = z
  }
}

export const Elevation = (el: HTMLElement, binding: VNodeDirective) => {
  modifyElevation(el, binding.value)
}

export default Elevation
