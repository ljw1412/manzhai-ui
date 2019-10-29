import Vue from 'vue'

const isServer = Vue.prototype.$isServer

type DomEvent = keyof (HTMLElementEventMap | WindowEventMap)

type DomEventListener = <K extends DomEvent>(
  element: HTMLElement | Window,
  event: K,
  handler: EventListenerOrEventListenerObject
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

export const once = function<K extends DomEvent>(
  el: HTMLElement | Window,
  event: K,
  fn: EventListener
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
