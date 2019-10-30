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
