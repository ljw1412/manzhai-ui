import Vue, { VNode } from 'vue'

declare global {
  interface HTMLElement {
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
}
