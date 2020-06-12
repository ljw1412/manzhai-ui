/**
 * 设置默认值和类型修复(常用用于 函数式组件)
 * @param {Object} defaultProps 默认属性，定义对象内属性类型
 * @param {Object} props 父组件传入的属性
 */
export declare function extendProps(defaultProps: Record<string, any>, props: Record<string, any>): Record<string, any>;
