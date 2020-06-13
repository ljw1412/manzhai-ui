import Modal from './Modal'

interface ModalConfig {
  title?: string
  content?: any
  elevation?: number
  zIndex?: number
  width?: string
  top?: string
  radius?: string
  transition?: string
  outerScroll?: boolean
  divider?: boolean
  appendToBody?: boolean
  mask?: boolean
  maskAppendToBody?: boolean
  closeOnClickMask?: boolean
  closeOnPressEscape?: boolean
  beforeClose?: (done: any) => void | Promise<any>
}

const defaultConfig = {
  title: '',
  content: '',
  elevation: 15,
  zIndex: '',
  width: '500px',
  top: '',
  radius: '',
  transition: 'mz-zoom',
  outerScroll: false,
  divider: false,
  appendToBody: true,
  mask: true,
  maskAppendToBody: true,
  closeOnClickMask: true,
  closeOnPressEscape: true,
  beforeClose: undefined
}

function initInstance(config?: ModalConfig) {
  const instance: any = new Modal({ el: document.createElement('div') })
  Object.assign(instance, defaultConfig, config)
  instance.visible = false

  const inputEvent = (val: boolean) => {
    instance.visible = val
    if (val === false) {
      instance.$off('visible:change', inputEvent)
      setTimeout(() => {
        instance && instance.$destroy()
      }, 1000)
    }
  }
  instance.$on('visible:change', inputEvent)
  return instance
}

function modal(config?: ModalConfig) {
  const instance = initInstance(config)
  instance.visible = true
  return instance
}

export default modal
