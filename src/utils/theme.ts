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
