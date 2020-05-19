import Vue, { PluginFunction } from 'vue'
import { Instance } from 'tippy.js'
import MzBus from './bus'
import { LoadingDirective } from './directives/loading'

declare global {
  interface Element {
    __resizeListeners__?: Function[]
    __ro__?: ResizeObserver
  }

  interface HTMLElement {
    _clickOutside?: EventListenerOrEventListenerObject
    _onWindowResize?: {
      callback: () => void
      options?: boolean | AddEventListenerOptions
    }
    _onElResize?: () => void

    _elevation?: number | string

    _ripple?: {
      enabled?: boolean
      centered?: boolean
      class?: string
      circle?: boolean
      touched?: boolean
      isTouch?: boolean
    }

    _hover?: {
      mouseenter?: () => void
      mouseleave?: () => void
    }

    _tooltip?: Instance
    _loading?: LoadingDirective
    _loadingVM?: Vue
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $changeTheme: (name: string) => void
    $getCurrentTheme: () => string
    $mzEventBus: typeof MzBus
  }
  interface VueConstructor<V extends Vue = Vue> {
    install: PluginFunction<Vue>
    componentName: string
    plugin: (Vue: VueConstructor) => void
  }
}
