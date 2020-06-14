import Modal from './Modal'
import MzButton from 'manzhai-ui/packages/Button/Button'

interface ModalConfig {
  title?: string
  content?: any
  elevation?: number
  zIndex?: number
  width?: string
  top?: string
  radius?: string
  transition?: string
  showClose?: boolean
  outerScroll?: boolean
  divider?: boolean
  appendToBody?: boolean
  mask?: boolean
  maskAppendToBody?: boolean
  closeOnClickMask?: boolean
  closeOnPressEscape?: boolean
  beforeClose?: (done: any) => void | Promise<any>
}

interface FooterButton {
  text: string
  color?: string
  textColor?: string
}

interface ConfirmModalConfig extends ModalConfig {
  cancelButton?: string | FooterButton
  confirmButton?: string | FooterButton
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

function createMzButton(
  instance: any,
  text: string = '',
  props: Record<string, any>,
  click: Function
) {
  const h = instance.$createElement
  return h(MzButton, { props, on: { click } }, text)
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

modal.alert = function(message: string, title: string, close: Function) {
  const instance = modal({
    title,
    content: message,
    showClose: false,
    closeOnClickMask: false
  })
  const onClick = () => {
    instance.visible = false
    if (close && typeof close === 'function') close()
  }
  instance.$slots.footer = [
    createMzButton(instance, '确定', { color: 'primary' }, onClick)
  ]
  return instance
}

modal.confirm = function(config: ConfirmModalConfig = {}) {
  const cancelBtn = { text: '取消', color: undefined, textColor: undefined }
  const confirmBtn = { text: '确定', color: 'primary', textColor: undefined }
  const { cancelButton, confirmButton } = config
  if (typeof cancelButton === 'string') {
    cancelBtn.text = cancelButton
  } else if (typeof cancelButton === 'object') {
    Object.assign(cancelBtn, cancelButton)
  }
  if (typeof confirmButton === 'string') {
    confirmBtn.text = confirmButton
  } else if (typeof confirmButton === 'object') {
    Object.assign(confirmBtn, confirmButton)
  }

  return new Promise((resolve, reject) => {
    const instance = modal(config)
    instance.showClose = false
    instance.closeOnClickMask = false
    instance.$slots.footer = [
      createMzButton(
        instance,
        cancelBtn.text,
        { color: cancelBtn.color, textColor: cancelBtn.textColor },
        () => {
          instance.visible = false
          reject(instance)
        }
      ),
      createMzButton(
        instance,
        confirmBtn.text,
        { color: confirmBtn.color, textColor: confirmBtn.textColor },
        () => {
          instance.visible = false
          resolve(instance)
        }
      )
    ]
  })
}

// TODO
modal.prompt = function(config?: ModalConfig) {}

export default modal
