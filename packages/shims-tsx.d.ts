import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Array<T> {
    remove: (item: T) => boolean
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $snackbar: {
      show: (options: Record<string, any>) => void
      close: () => {}
    }
  }
}
