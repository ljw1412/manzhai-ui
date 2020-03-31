import { VNodeDirective } from 'vue/types/umd'

interface ResizeVNodeDirective extends VNodeDirective {
  value?: () => void
  options?: boolean | AddEventListenerOptions
}

export const WindowResize = {
  inserted(el: HTMLElement, bind: ResizeVNodeDirective) {},
  unbind(el: HTMLElement) {}
}
