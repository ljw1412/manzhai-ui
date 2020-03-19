import Mask from './Mask'
import { MaskConfig } from './Mask.d'
import Stack from '@/classes/Stack'

const maskList: Mask[] = []
// 全局的遮罩的栈
const maskStack = new Stack()
let instance: any

function initInstance() {
  if (!instance) {
    instance = new Mask({ el: document.createElement('div') })
  }
}

function show(config?: MaskConfig) {
  initInstance()
  maskStack.push(config)
  showTopMask()
}

// 显示栈顶的遮罩
function showTopMask() {
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
