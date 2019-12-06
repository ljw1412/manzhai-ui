import './ripple.scss'
import { VNodeDirective, VNode } from 'vue'

function xy(el: HTMLElement, x: string, y: string) {
  el.style.left = x
  el.style.top = y
}

export interface RippleOptions {
  class?: string
  center?: boolean
  circle?: boolean
}

function isRippleEnabled(value: any): value is true {
  return typeof value === 'undefined' || !!value
}

function calculate(
  e: MouseEvent,
  el: HTMLElement,
  options: RippleOptions = {}
) {
  const { clientX, clientY } = e
  const { width, height, left, top } = el.getBoundingClientRect()
  const tapX = clientX - left
  const tapY = clientY - top

  let scale = 0
  // 触击的X位置距离元素中心点的距离
  const xToCenter = options.center ? 0 : Math.abs(width / 2 - tapX)
  // 触击的Y位置距离元素中心点的距离
  const yToCenter = options.center ? 0 : Math.abs(height / 2 - tapY)
  // 半径计算 (点击位置到元素最远点的距离)
  const radius = Math.sqrt(
    (xToCenter + width / 2) ** 2 + (yToCenter + height / 2) ** 2
  )

  const centerX = `${(options.center ? width / 2 : tapX) - radius}px`
  const centerY = `${(options.center ? height / 2 : tapY) - radius}px`

  return { radius, scale, centerX, centerY }
}

const ripple = {
  create(e: MouseEvent, el: HTMLElement, options: RippleOptions) {
    if (!el._ripple || !el._ripple.enabled) return

    const rippleWrapper = document.createElement('span')
    const ripple = document.createElement('span')
    rippleWrapper.className =
      'mz-ripple-wrapper' + (options.class ? options.class : '')
    rippleWrapper.appendChild(ripple)

    const { radius, scale, centerX, centerY } = calculate(e, el, options)
    ripple.className = 'mz-ripple'
    ripple.style.width = ripple.style.height = `${radius * 2}px`

    safeElementPosition(el)
    el.appendChild(rippleWrapper)

    ripple.classList.add('mz-ripple-enter')
    ripple.classList.add('mz-ripple-enter-active')
    xy(ripple, centerX, centerY)
    ripple.dataset.activated = String(performance.now())

    setTimeout(() => {
      ripple.classList.remove('mz-ripple-enter')
      ripple.classList.add('mz-ripple-in')
    }, 0)
  },
  remove(el: HTMLElement | null) {
    if (!el || !el._ripple || !el._ripple.enabled) return

    const ripples = el.querySelectorAll('.mz-ripple')

    if (!ripples.length) return

    const ripple = ripples[ripples.length - 1] as HTMLElement

    if (ripple.dataset.isHiding) return
    ripple.dataset.isHiding = 'true'

    // 判断动画剩余时间
    const diff = performance.now() - Number(ripple.dataset.activated)
    const delay = Math.max(500 - diff, 0)

    setTimeout(() => {
      ripple.classList.remove('mz-ripple-in')
      ripple.classList.remove('mz-ripple-enter-active')
      ripple.classList.add('mz-ripple-out')
      ripple.classList.add('mz-ripple-out-active')
      el.blur()
      setTimeout(() => {
        const ripples = el.querySelectorAll('.mz-ripple')
        if (ripples.length <= 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition
          delete el.dataset.previousPosition
        }
        ripple.parentNode && el.removeChild(ripple.parentNode)
      }, 450)
    }, delay)
  }
}

function showRipple(e: MouseEvent) {
  const options: RippleOptions = {}
  const element = e.currentTarget as HTMLElement
  if (!element || !element._ripple) return

  options.center = element._ripple.centered
  options.circle = element._ripple.circle
  if (element._ripple.class) options.class = element._ripple.class
  ripple.create(e, element, options)
}

function hideRipple(e: Event) {
  const element = e.currentTarget as HTMLElement
  if (!element) return
  ripple.remove(element)
}

function safeElementPosition(el: HTMLElement) {
  const computedStyle = window.getComputedStyle(el)
  if (computedStyle && computedStyle.position === 'static') {
    el.style.position = 'relative'
    el.dataset.previousPosition = 'static'
  }
}

function removeListeners(el: HTMLElement) {
  el.removeEventListener('mousedown', showRipple)
  el.removeEventListener('mouseup', hideRipple)
  el.removeEventListener('mouseleave', hideRipple)
  el.removeEventListener('dragstart', hideRipple)
}

function updateRipple(
  el: HTMLElement,
  binding: VNodeDirective,
  isEnabled: boolean
) {
  const enabled = isRippleEnabled(binding.value)
  if (!enabled) {
    ripple.remove(el)
  }
  el._ripple = el._ripple || {}
  el._ripple.enabled = enabled
  const value = binding.value || {}
  if (value.center) {
    el._ripple.centered = true
  }
  if (value.class) {
    el._ripple.class = value.class
  }
  if (value.circle) {
    el._ripple.circle = value.circle
  }

  if (enabled && !isEnabled) {
    el.addEventListener('mousedown', showRipple)
    el.addEventListener('mouseup', hideRipple)
    el.addEventListener('mouseleave', hideRipple)
    el.addEventListener('dragstart', hideRipple, { passive: true })
  } else if (!enabled && isEnabled) {
    removeListeners(el)
  }
}

export const Ripple = {
  bind: (el: HTMLElement, binding: VNodeDirective, node: VNode) => {
    updateRipple(el, binding, false)
  },
  unbind: (el: HTMLElement) => {
    delete el._ripple
    removeListeners(el)
  },
  update: (el: HTMLElement, binding: VNodeDirective) => {
    if (binding.value === binding.oldValue) return
    updateRipple(el, binding, isRippleEnabled(binding.oldValue))
  }
}

export default Ripple
