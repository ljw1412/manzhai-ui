import { VNodeDirective } from 'vue'

function elevation(z: string | number) {
  return `mz-elevation-${z}`
}

function modifyElevation(el: HTMLElement, z: string | number) {
  if (!el._elevation) el._elevation = 0
  if (z || z === 0) {
    el.classList.remove(elevation(el._elevation))
    if (z !== 0) el.classList.add(elevation(z))
    el._elevation = z
  }
}

export const Elevation = (el: HTMLElement, binding: VNodeDirective) => {
  modifyElevation(el, binding.value)
}

export default Elevation
