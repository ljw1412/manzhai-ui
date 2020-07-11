import { COLOR_TYPES, PRESET_COLOR_MAP } from '../constants/index'
/**
 * 切换根节点上的主体名称 (data-theme)
 * @param name 主题名称
 */
export function changeTheme(name: string) {
  const rootDataset = document.documentElement.dataset
  rootDataset.theme = name
  localStorage.setItem('mz-theme', name)
}

export function getCurrentTheme() {
  return localStorage.getItem('mz-theme') || ''
}

export function getMzColor(color?: string) {
  if (!color) return undefined
  if (COLOR_TYPES.includes(color)) return `var(--color-${color})`
  return color
}

// @Deprecated
export function colorInTypes(color?: string) {
  return COLOR_TYPES.includes(color || '')
}

/**
 * 是否为预设颜色
 * @param color 颜色
 * @param type 类型
 */
export function isPresetColor(
  color?: string,
  type: 'text' | 'bg' | 'border' = 'text'
) {
  if (!color) return false
  return PRESET_COLOR_MAP[type].includes(color)
}

/**
 * 获得预设颜色样式类
 * @param color 颜色
 * @param type 类型
 */
export function getPresetColorClass(
  color?: string,
  type: 'text' | 'bg' | 'border' = 'text'
) {
  return isPresetColor(color, type) ? `${type}-${color}` : null
}
