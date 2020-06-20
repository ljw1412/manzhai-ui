import Vue, { VNodeChildren } from 'vue'
import Modal from './Modal'
import MzInput from 'manzhai-ui/packages/Input/Input'
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
  maskBlur?: string
  maskColor?: string
  maskAppendToBody?: boolean
  closeOnClickMask?: boolean
  closeOnPressEscape?: boolean
  beforeClose?: (done: any) => void | Promise<any>
}

interface FooterButton {
  text?: string
  color?: string
  textColor?: string
  callback?: Function
}

interface ModalConfigWithButton extends ModalConfig {
  cancel?: string | FooterButton
  confirm?: string | FooterButton
}

interface PromptRuleItem {
  test: RegExp
  message: string
}

type PromptRule =
  | ((value: string) => string)
  | PromptRuleItem
  | PromptRuleItem[]

interface PromptModalConfig extends ModalConfigWithButton {
  defaultValue?: string
  rules?: PromptRule
}

const MzInputWrapper = Vue.extend<any, any, any, any>({
  data() {
    return {
      value: '',
      error: ''
    }
  },
  render(h) {
    return h('div', [
      h(MzInput, {
        props: { value: this.value },
        on: {
          input: (val: string) => {
            this.value = val
            if (this.error) this.error = ''
          }
        }
      }),
      h(
        'p',
        {
          style: {
            fontSize: '14px',
            color: '#ed4014',
            height: '20px',
            lineHeight: '20px'
          }
        },
        this.error
      )
    ] as VNodeChildren)
  }
})

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
  const instance: any = new Modal({
    el: document.createElement('div')
  })
  Object.assign(instance, defaultConfig, config)
  instance.visible = false

  const closedEvent = () => {
    instance.$off('closed', closedEvent)
    instance && instance.$destroy()
  }
  instance.$on('closed', closedEvent)
  return instance
}

function modal(config?: ModalConfig) {
  const instance = initInstance(config)
  instance.visible = true
  return instance
}

// 创建按钮元素
function createMzButton(
  instance: any,
  { text, color, textColor }: FooterButton,
  click: Function
) {
  const h = instance.$createElement
  return h(MzButton, { props: { color, textColor }, on: { click } }, text)
}

function getModalButton(config: ModalConfigWithButton) {
  const cancelBtn = { text: '取消' } as FooterButton
  const confirmBtn = { text: '确定', color: 'primary' } as FooterButton
  const { cancel, confirm } = config
  if (typeof cancel === 'string') {
    cancelBtn.text = cancel
  } else if (typeof cancel === 'object') {
    Object.assign(cancelBtn, cancel)
  }
  if (typeof confirm === 'string') {
    confirmBtn.text = confirm
  } else if (typeof confirm === 'object') {
    Object.assign(confirmBtn, confirm)
  }
  return { cancelBtn, confirmBtn }
}

// 安全执行函数
function execSafeFunction(fn?: Function, ...args: any[]) {
  if (fn && typeof fn === 'function') fn(...args)
}

// 消息弹窗
modal.alert = function(
  message: string,
  title: string,
  btn?: string | FooterButton
) {
  const { confirmBtn } = getModalButton({ confirm: btn })
  return new Promise((resolve, reject) => {
    const instance = modal({
      title,
      content: message,
      showClose: false,
      closeOnClickMask: false
    })
    instance.$slots.footer = [
      createMzButton(instance, { text: '确定', color: 'primary' }, () => {
        instance.visible = false
        execSafeFunction(confirmBtn.callback)
        resolve()
      })
    ]
  })
}

// 确认弹窗
modal.confirm = function(config: ModalConfigWithButton = {}) {
  const { cancelBtn, confirmBtn } = getModalButton(config)

  return new Promise((resolve, reject) => {
    const instance = modal({
      showClose: false,
      closeOnClickMask: false,
      ...config
    })
    instance.$slots.footer = [
      createMzButton(instance, cancelBtn, () => {
        instance.visible = false
        execSafeFunction(cancelBtn.callback)
        reject()
      }),
      createMzButton(instance, confirmBtn, () => {
        instance.visible = false
        execSafeFunction(confirmBtn.callback)
        resolve()
      })
    ]
  })
}

function vaildValue(value: string, rules?: PromptRule) {
  if (typeof rules === 'function') {
    const result = rules(value)
    return { pass: !result, message: result }
  } else if (Array.isArray(rules)) {
    for (const rule of rules) {
      const { test, message } = rule
      if (!test.test(value)) {
        return { pass: false, message }
      }
    }
  } else if (typeof rules === 'object') {
    const { test, message } = rules
    if (!test.test(value)) {
      return { pass: false, message }
    }
  }
  return { pass: true }
}

// 输入弹窗
modal.prompt = function(config: PromptModalConfig = {}): Promise<string> {
  const { cancelBtn, confirmBtn } = getModalButton(config)
  const { content, defaultValue = '', rules } = config
  return new Promise((resolve, reject) => {
    const instance = modal({
      showClose: false,
      closeOnClickMask: false,
      ...config
    })
    const inputVNode = instance.$createElement(MzInputWrapper, {
      style: { 'margin-top': '10px' }
    })
    instance.$slots.default = [content, inputVNode]
    instance.$slots.footer = [
      createMzButton(instance, cancelBtn, () => {
        instance.visible = false
        execSafeFunction(cancelBtn.callback)
        reject()
      }),
      createMzButton(instance, confirmBtn, () => {
        const value = inputVNode.componentInstance.value
        const { pass, message } = vaildValue(value, rules)
        if (!pass) {
          inputVNode.componentInstance.error = message
        } else {
          instance.visible = false
          execSafeFunction(confirmBtn.callback, value)
          resolve(value)
        }
      })
    ]
    instance.$nextTick(() => {
      inputVNode.componentInstance.value = defaultValue
    })
  })
}

export default modal
