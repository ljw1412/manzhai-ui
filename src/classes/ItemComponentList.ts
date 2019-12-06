export default class ItemComponentList<T> extends Array {
  remove(item: T) {
    const index = this.indexOf(item)
    if (~index) {
      this.splice(index, 1)
      return true
    }
    return false
  }
}
