import MzSnackbar from '.'

export type PlacementTypes =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'center'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

export interface SnackbarPluginOptions {
  value?: boolean
  fixed?: boolean
  text?: string
  timeout?: number
  color?: string
  buttonText?: string
  buttonProps?: Record<string, any>
  buttonClick?: () => void
  vertical?: boolean
  placement?: PlacementTypes
  zIndex?: number
}

export interface SnackbarConstructor extends MzSnackbar, SnackbarPluginOptions {
  show: () => void
}

declare module 'vue/types/vue' {
  interface Vue {
    $snackbar: {
      show: (options: SnackbarPluginOptions) => void
      close: () => {}
    }
  }
}
