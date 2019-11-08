export default class Queue {
  q: any[] = []
  maxLength: number = Infinity

  constructor(maxLength?: number) {
    if (maxLength) this.maxLength = maxLength
  }

  isEmpty() {
    return this.size() === 0
  }

  isFull() {
    return this.size() >= this.maxLength
  }

  size() {
    return this.q.length
  }

  queue() {
    return this.q
  }

  pop() {
    return !this.isEmpty() ? this.q.shift() : null
  }

  push(data: any) {
    if (this.isFull()) {
      console.error('插入数据失败，队列已达长度上限！', data)
      return false
    }
    this.q.push(data)
    return true
  }

  front() {
    if (this.isEmpty()) return null
    return this.q[0]
  }

  back() {
    if (this.isEmpty()) return null
    return this.q[this.size() - 1]
  }

  clear() {
    this.q = []
    return this.q
  }
}
