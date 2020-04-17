import Modal from './Modal'
import { ModalConfig } from './Modal.d'

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
  headless: false,
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
      instance.$off('input', inputEvent)
      setTimeout(() => {
        instance && instance.$destroy()
      }, 1000)
    }
  }
  instance.$on('input', inputEvent)
  return instance
}

function modal(config?: ModalConfig) {
  const instance = initInstance(config)
  instance.visible = true
}

export default modal
