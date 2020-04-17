/**
 * 设置默认值和类型修复(常用用于 函数式组件)
 * @param {Object} defaultProps 默认属性，定义对象内属性类型
 * @param {Object} props 父组件传入的属性
 */
export function extendProps(
  defaultProps: Record<string, any>,
  props: Record<string, any>
) {
  const booleanKeys = Object.keys(defaultProps).filter(
    key => typeof defaultProps[key] === 'boolean'
  )
  // 修复 Boolean 属性的快捷 true 的写法
  // 例如: <component isFixed></component>
  for (const key of booleanKeys) {
    if (props[key] || props[key] === '') {
      props[key] = true
    }
  }
  return Object.assign(defaultProps, props)
}
