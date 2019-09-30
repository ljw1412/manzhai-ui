/**
 * 切换根节点上的主体名称 (data-theme)
 * @param name 主题名称
 */
export function changeTheme(name: string) {
  const rootDataset = document.documentElement.dataset
  rootDataset.theme = name
}

export function getCurrentTheme() {
  const rootDataset = document.documentElement.dataset
  return rootDataset.theme
}
