import Mask from './Mask'
import Stack from '@/classes/Stack'

export type MaskConfig = {
  color?: string
  zIndex?: number
  transition?: string
  onClick?: (e: MouseEvent) => void
}

const maskList: Mask[] = []
// 全局的遮罩的栈
const maskStack = new Stack()
let instance: any

const defaultConfig = {
  zIndex: undefined,
  transition: undefined,
  onClick: (e: MouseEvent) => {}
}

function initInstance() {
  if (!instance) {
    instance = new Mask({ el: document.createElement('div') })
  }
  Object.assign(instance, defaultConfig)
}

function show(config?: MaskConfig) {
  maskStack.push(config)
  showTopMask()
}

// 显示栈顶的遮罩
function showTopMask() {
  initInstance()
  if (maskStack.isEmpty()) return
  const config = maskStack.top()
  if (config) {
    for (let prop in config) {
      if (Object.prototype.hasOwnProperty.call(config, prop)) {
        instance[prop] = config[prop as keyof MaskConfig]
      }
    }
  }

  instance.appendToBody = true
  instance.visible = true
}

function hide() {
  initInstance()
  maskStack.pop()
  showTopMask()
  if (maskStack.isEmpty()) {
    instance.visible = false
    return
  }
}

export function addMask(item: Mask) {
  maskList.push(item)
  document.body.style.overflow = 'hidden'
}

export function removeMask(item: Mask) {
  maskList.remove(item)
  if (maskList.length === 0) {
    document.body.style.overflow = ''
  }
}

export default { show, hide }
