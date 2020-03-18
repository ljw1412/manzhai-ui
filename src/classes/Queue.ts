/**
 * 队列模型类
 * @description 准确来说是双向队列(Deque)
 */
export default class Queue {
  q: any[] = []
  maxLength: number = Infinity

  constructor(maxLength?: number) {
    if (maxLength) this.maxLength = maxLength
  }

  /**
   * 队列是否为空
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 队列是否已满，仅在 maxLength 存在时有效。
   */
  isFull() {
    return this.size() >= this.maxLength
  }

  /**
   * 获取当前队列长度
   */
  size() {
    return this.q.length
  }

  /**
   * 获取队列
   */
  queue() {
    return this.q
  }

  /**
   * 弹出头元素
   */
  pop() {
    return !this.isEmpty() ? this.q.shift() : null
  }

  /**
   * 弹出尾元素
   */
  popBack() {
    return !this.isEmpty() ? this.q.pop() : null
  }

  /**
   * 尾部插入
   * @param data
   */
  push(...data: any) {
    if (this.isFull()) {
      console.error('插入数据失败，队列已达长度上限！', data)
      return false
    }
    this.q.push(...data)
    return true
  }

  /**
   * 头部插入
   * @param data
   */
  pushFront(data: any) {
    if (this.isFull()) {
      console.error('插入数据失败，队列已达长度上限！', data)
      return false
    }
    this.q.unshift(data)
    return true
  }

  /**
   * 获取头元素
   */
  front() {
    if (this.isEmpty()) return null
    return this.q[0]
  }

  /**
   * 获取尾元素
   */
  back() {
    if (this.isEmpty()) return null
    return this.q[this.size() - 1]
  }

  /**
   * 清空队列
   */
  clear() {
    this.q = []
    return this.q
  }
}
