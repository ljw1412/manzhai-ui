import Vue, { PluginFunction } from 'vue'
import { Instance } from 'tippy.js'
import MzBus from 'manzhai-ui/src/bus'
import blanking from 'manzhai-ui/src/directives/blanking/index'
import MzImagePreviewPlugin from 'manzhai-ui/packages/Modal/plugin'
import MzMaskPlugin from 'manzhai-ui/packages/Mask/plugin'
import MzModalPlugin from 'manzhai-ui/packages/Modal/plugin'
import MzSnackbarPlugin from 'manzhai-ui/packages/Snackbar/plugin'
import 'resize-observer-polyfill'

declare global {
  interface Array<T> {
    remove: (item: T) => boolean
  }

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
      mouseenter?: (e: MouseEvent) => void
      mouseleave?: (e: MouseEvent) => void
    }

    _tooltip?: Instance
    _loadingVM?: Vue
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $changeTheme: (name: string) => void
    $getCurrentTheme: () => string
    $mzEventBus: typeof MzBus
    $snackbar: typeof MzSnackbarPlugin
    $imagePreview: typeof MzImagePreviewPlugin
    $modal: typeof MzModalPlugin
    $mask: typeof MzMaskPlugin
    $blanking: typeof blanking
  }
  interface VueConstructor<V extends Vue = Vue> {
    install: PluginFunction<Vue>
    componentName: string
    plugin: (Vue: VueConstructor) => void
  }
}
