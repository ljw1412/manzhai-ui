import Vue, { VNode, PluginFunction } from 'vue'
import { SnackbarPluginOptions } from 'packages/Snackbar/Snackbar'

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
    $changeTheme: (name: string) => void
    $getCurrentTheme: () => string
    $mzEventBus: Vue
  }
  interface VueConstructor<V extends Vue = Vue> {
    install: PluginFunction<Vue>
    componentName: string
    plugin: (Vue: VueConstructor) => void
  }
}
