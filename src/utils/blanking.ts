export const options = {
  defaultStore: 'blanking-store'
}

// 获取显示状态缓存
export function getStore(storeName: string = options.defaultStore) {
  let data: any = localStorage.getItem(storeName)
  try {
    data = JSON.parse(data!)
  } catch (error) {
    data = null
  }
  return (data || {}) as Record<string, any>
}

export function clearStore(storeName: string = options.defaultStore) {
  localStorage.setItem(storeName, JSON.stringify({}))
}

// 获取是否隐藏的状态 true为隐藏
export function getState(
  name: string,
  storeName: string = options.defaultStore
) {
  const data = getStore(storeName)
  return data[name] || false
}

// 修改状态
export function setState(
  name: string,
  value = true,
  storeName: string = options.defaultStore
) {
  const data = getStore()
  data[name] = value
  localStorage.setItem(storeName, JSON.stringify(data))
}
