export type ModalConfig = {
  title?: string
  elevation?: number
  zIndex?: number
  width?: string
  top?: string
  radius?: string
  transition?: string
  outerScroll?: boolean
  divider?: boolean
  headless?: boolean
  appendToBody?: boolean
  mask?: boolean
  maskAppendToBody?: boolean
  closeOnClickMask?: boolean
  closeOnPressEscape?: boolean
  beforeClose?: (done: any) => void | Promise<any>
}