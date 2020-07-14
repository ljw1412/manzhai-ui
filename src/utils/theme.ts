import { COLOR_TYPES, PRESET_COLORS } from '../constants/index'
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
  return PRESET_COLORS.includes(color)
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
