import Stack from '@/classes/Stack'
import { assert, expect } from 'chai'

describe('class Stack', () => {
  it('stack.push', () => {
    const stack = new Stack()
    stack.push('test')
    assert(stack.size() === 1)
  })

  it('stack.top', () => {
    const stack = new Stack()
    stack.push('test')
    stack.push('test2')
    assert(stack.top() === 'test2')
  })

  it('stack.pop', () => {
    const stack = new Stack()
    stack.push('test')
    stack.push('test2')
    assert(stack.pop() === 'test2')
  })

  it('stack.isEmpty', () => {
    const stack = new Stack()
    assert(stack.isEmpty())
  })

  it('stack.isFull', () => {
    const stack = new Stack(1)
    stack.push('test')
    assert(stack.isFull())
  })

  it('stack.size', () => {
    const stack = new Stack()
    stack.push('test')
    assert(stack.size() === 1)
  })
})
