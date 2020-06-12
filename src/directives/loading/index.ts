import Vue, { DirectiveFunction } from 'vue'
import { capitalized } from 'manzhai-ui/src/utils/string'
import { safeElementPosition } from 'manzhai-ui/src/utils/dom'
import MzLoading from 'manzhai-ui/packages/Loading'

export interface LoadingDirectiveOptions {
  isDirective: boolean
  loading: boolean
  text: string
  mode: string
  type: string
  textColor: string
  background: string
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
  background: 'rgba(255, 255, 255, 0.9)'
}

// 与默认属性合并
function getOptions(el: HTMLElement) {
  return LOADING_ATTRS.reduce(
    (obj: Record<string, any>, item) => {
      const name = capitalized(
        item.replace(/mz-loading-/, ''),
        true
      ) as keyof typeof defaultOptions
      obj[name] = el.getAttribute(item) || defaultOptions[name]
      return obj
    },
    { loading: false, isDirective: true }
  ) as LoadingDirectiveOptions
}

function renderLoading(options: LoadingDirectiveOptions) {
  return new Vue({
    data() {
      return { options }
    },
    render: function(h) {
      // @ts-ignore
      return h(MzLoading, { props: this.options, class: 'mz-quick-loading' })
    }
  }).$mount()
}

export const Loading: DirectiveFunction = function(el, binding) {
  if (binding.oldValue === binding.value) return
  const options = getOptions(el)
  let vm: any
  if (el._loadingVM) {
    vm = el._loadingVM
  } else {
    vm = renderLoading(options)
    el._loadingVM = vm
    el.appendChild(vm.$el)
  }

  if (binding.value) {
    vm.options.loading = true
    vm.$el.style.display = 'block'
    setTimeout(() => {
      safeElementPosition(el)
    }, 20)
  } else {
    vm.options.loading = false
    setTimeout(() => {
      vm.$el.style.display = 'none'
      if (el.dataset.previousPosition) {
        el.style.position = el.dataset.previousPosition
        delete el.dataset.previousPosition
      }
    }, 300)
  }
}

export default Loading
