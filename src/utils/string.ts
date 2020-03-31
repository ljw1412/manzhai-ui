// 驼峰转横杠分隔
const hyphenateRE = /\B([A-Z])/g
export function hyphenate(str: string, hyphenate = '-') {
  return str.replace(hyphenateRE, `${hyphenate}$1`).toLowerCase()
}

// 分隔转驼峰
export function capitalized(str: string) {
  return str.replace(/\b\w+\b/g, function(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1)
  })
}
