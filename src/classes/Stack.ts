export class Stack {
  stack: any[] = []
  maxLength: number = Infinity

  constructor(maxLength?: number) {
    this.maxLength = maxLength || Infinity
  }

  /**
   * 栈是否为空
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 栈是否已满，仅在 maxLength 存在时有效。
   */
  isFull() {
    return this.size() >= this.maxLength
  }

  /**
   * 栈的大小
   */
  size() {
    return this.stack.length
  }

  /**
   * 入栈
   * @param data
   */
  push(...data: any) {
    if (this.isFull()) {
      console.error('插入数据失败，队列已达长度上限！', data)
      return false
    }
    this.stack.push(...data)
    return true
  }

  /**
   * 出栈
   */
  pop() {
    return !this.isEmpty() ? this.stack.pop() : null
  }

  /**
   * 获取栈顶
   */
  top() {
    if (this.isEmpty()) return null
    return this.stack[this.size() - 1]
  }
}
