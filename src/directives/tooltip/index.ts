import { VNodeDirective, VNode } from 'vue'
import tippy from 'tippy.js'
import $MzBus from '@/bus'

const triggers = ['hover', 'focus', 'click']

const themeNames = ['light', 'light-border', 'material', 'translucent']

const placements = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end'
]

// 获取那一类属性的唯一值
function getUniqueProp(modifiers: Record<string, any> = {}, list: any[] = []) {
  for (const name of list) {
    if (modifiers[name]) return name
  }
  return ''
}

// 同步夜间模式功能
function getTheme(modifiers: Record<string, any> = {}) {
  const result = getUniqueProp(modifiers, themeNames)
  if (result) return result
  return $MzBus.theme === 'dark' ? 'light' : ''
}

function getTrigger(modifiers: Record<string, any> = {}) {
  const list = Object.keys(modifiers).filter(item => triggers.includes(item))
  return list.join(' ').replace('hover', 'mouseenter') || 'mouseenter'
}

function updataTippy(el: HTMLElement, binding: VNodeDirective) {
  if (!el._tooltip) el._tooltip = tippy(el, {})
  const { modifiers = {} } = binding
  const trigger = getTrigger(modifiers)

  let options = {
    trigger,
    content: '',
    hideOnClick: trigger === 'click',
    arrow: modifiers.arrow,
    theme: getTheme(modifiers),
    placement: getUniqueProp(modifiers, placements) || 'top'
  }
  if (typeof binding.value === 'string') {
    options.content = binding.value
  } else if (typeof binding.value === 'object') {
    options = binding.value
  }
  el._tooltip.setProps(options)
}

export const Tooltip = {
  bind: (el: HTMLElement, binding: VNodeDirective, node: VNode) => {
    updataTippy(el, binding)
  },
  unbind: (el: HTMLElement) => {
    if (!el._tooltip) return
    el._tooltip.destroy()
    delete el._tooltip
  },
  update: (el: HTMLElement, binding: VNodeDirective) => {
    updataTippy(el, binding)
  }
}

export default Tooltip
