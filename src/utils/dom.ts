import Vue from 'vue'

const isServer = Vue.prototype.$isServer

type DomEventListener = (
  element: HTMLElement | Window,
  event: string,
  handler: (e: any) => any
) => void

export const on = (function(): DomEventListener {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      element.addEventListener(event, handler, false)
    }
  } else {
    return function(element, event, handler) {
      console.error('暂未兼容该浏览器的事件监听方法')
    }
  }
})()

export const off = (function(): DomEventListener {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      element.removeEventListener(event, handler, false)
    }
  } else {
    return function(element, event, handler) {
      console.error('暂未兼容该浏览器的事件监听方法')
    }
  }
})()

export const once = function(
  el: HTMLElement | Window,
  event: string,
  fn: (e: any) => any
) {
  const listener = function() {
    if (fn) {
      // @ts-ignore
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

export function scrollIntoView(target: HTMLElement | string, byJs = false) {
  if (!target) {
    return console.error('[scrollIntoView]', '请传入正确的target的参数')
  }
  let el!: HTMLElement
  if (typeof target === 'string') {
    el = document.querySelector(target) as HTMLElement
  }
  if (!el) {
    console.error('[scrollIntoView]', `未找到“${target}”目标元素！`)
    return
  }
  if (byJs) {
    // firefox 36+ | chrome 61+ | Opera 48+
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  } else {
    location.hash = `#${el.id}`
  }
}

export function safeElementPosition(el: HTMLElement) {
  const computedStyle = window.getComputedStyle(el)
  if (computedStyle && computedStyle.position === 'static') {
    el.style.position = 'relative'
    el.dataset.previousPosition = 'static'
  }
}
