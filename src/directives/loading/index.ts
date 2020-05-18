import { DirectiveFunction } from 'vue'
import { capitalized } from '@/utils/string'
import { safeElementPosition } from '@/utils/dom'

export interface LoadingDirectiveOptions {
  text: string
  mode: string
  type: string
  textColor: string
  background: string
}

export interface LoadingDirective {
  el: HTMLElement
  options: LoadingDirectiveOptions
}

const LOADING_ATTRS = [
  'mz-loading-text',
  'mz-loading-mode',
  'mz-loading-type',
  'mz-loading-text-color',
  'mz-loading-background'
]

const defaultOptions = {
  text: '',
  mode: '1',
  type: 'four-color',
  textColor: '',
  background: ''
}

function createLoadingCore(type: string, mode: string) {
  const loading = document.createElement('span')
  loading.className = 'mz-loading__core'
  const loadingCore = document.createElement('span')
  loadingCore.className = `mz-loading__icon ${type} ${type}-${mode}`
  for (let i = 1; i <= 4; i++) {
    const shape = document.createElement('i')
    shape.className = `shape shape${i}`
    loadingCore.appendChild(shape)
  }
  loading.appendChild(loadingCore)
  return loading
}

function createLoading(options: LoadingDirectiveOptions) {
  const el = document.createElement('div')
  el.className = 'mz-quick-loading'
  el.style.cssText = `background-color:${options.background}`
  el.appendChild(createLoadingCore(options.type, options.mode))
  return el
}

export const Loading: DirectiveFunction = function(el, binding) {
  if (binding.oldValue === binding.value) return

  const options = LOADING_ATTRS.reduce((obj: Record<string, any>, item) => {
    const name = capitalized(
      item.replace(/mz-loading-/, ''),
      true
    ) as keyof typeof defaultOptions
    obj[name] = el.getAttribute(item) || defaultOptions[name]
    return obj
  }, {}) as LoadingDirectiveOptions

  let loadingEl =
    !el._loading || !el._loading.el ? createLoading(options) : el._loading.el

  el.appendChild(loadingEl)
  if (binding.value) {
    loadingEl.style.display = 'block'
    setTimeout(() => {
      safeElementPosition(el)
    }, 0)
  } else {
    loadingEl.style.display = 'none'
    if (el.dataset.previousPosition) {
      el.style.position = el.dataset.previousPosition
      delete el.dataset.previousPosition
    }
  }

  el._loading = { el: loadingEl, options }
}

export default Loading
