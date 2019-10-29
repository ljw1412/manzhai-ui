import Vue, { VNode, PluginFunction } from 'vue'

declare global {
  interface Element {
    __resizeListeners__?: Function[]
    __ro__?: ResizeObserver
  }

  interface HTMLElement {
    _clickOutside?: EventListenerOrEventListenerObject

    _elevation?: number | string

    _ripple?: {
      enabled?: boolean
      centered?: boolean
      class?: string
      circle?: boolean
      touched?: boolean
      isTouch?: boolean
    }
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $changeTheme: Function
    $getCurrentTheme: Function
  }
  interface VueConstructor<V extends Vue = Vue> {
    install: PluginFunction<Vue>
    componentName: string
  }
}
