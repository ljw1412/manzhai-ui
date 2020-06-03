import { VNodeDirective } from 'vue/types/umd'

const noop = () => {}

const mouseenter = (el: HTMLElement, fn: Function) => (e: MouseEvent) => {
  el.classList.add('hover')
  fn(e)
}

const mouseleave = (el: HTMLElement, fn: Function) => (e: MouseEvent) => {
  el.classList.remove('hover')
  fn(e)
}

export const Hover = {
  inserted(el: HTMLElement, binding: VNodeDirective) {
    let enter = noop
    let leave = noop
    if (typeof binding.value === 'function') {
      enter = binding.value
    } else if (typeof binding.value === 'object') {
      enter = binding.value.enter || noop
      leave = binding.value.leave || noop
    }
    const enterCallback = mouseenter(el, enter)
    const outCallback = mouseleave(el, leave)

    el.addEventListener('mouseenter', enterCallback, false)
    el.addEventListener('mouseleave', outCallback, false)

    el._hover = { mouseenter: enterCallback, mouseleave: outCallback }
  },
  unbind(el: HTMLElement) {
    if (el._hover) {
      if (el._hover.mouseenter) {
        el.removeEventListener('mouseenter', el._hover.mouseenter, false)
      }
      if (el._hover.mouseleave) {
        el.addEventListener('mouseleave', el._hover.mouseleave, false)
      }
      delete el._hover
    }
  }
}
export default Hover
