// 常用用于 函数式组件，设置默认值和类型修复
export function extendProps(
  defaultProps: Record<string, any>,
  props: Record<string, any>
) {
  const booleanKeys = Object.keys(defaultProps).filter(
    key => typeof defaultProps[key] === 'boolean'
  )
  for (const key of booleanKeys) {
    if (props[key] || props[key] === '') {
      props[key] = true
    }
  }
  return Object.assign(defaultProps, props)
}
