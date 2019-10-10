/* istanbul ignore next */
import Vue from 'vue'

const isServer = Vue.prototype.$isServer

/* istanbul ignore next */
export const on = (function() {
  if (!isServer) {
    return function<K extends keyof HTMLElementEventMap>(
      element: HTMLElement,
      event: K,
      handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
    ) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  }
  return function() {}
})()

/* istanbul ignore next */
export const off = (function() {
  if (!isServer) {
    return function<K extends keyof HTMLElementEventMap>(
      element: HTMLElement,
      event: K,
      handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
    ) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  }
  return function() {}
})()
