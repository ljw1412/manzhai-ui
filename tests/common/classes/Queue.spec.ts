import Queue from '@/classes/Queue'
import { assert, expect } from 'chai'

describe('class Queue', () => {
  it('queue.push() and queue.front()', () => {
    const q = new Queue()
    q.push('test')
    assert(q.front() === 'test')
  })

  it('queue.pushFront()', () => {
    const q = new Queue()
    q.pushFront('test')
    q.pushFront('test2')
    assert(q.front() === 'test2')
  })

  it('queue.isEmpty()', () => {
    const q = new Queue()
    const pass1 = q.isEmpty()
    q.push('test')
    const pass2 = !q.isEmpty()
    assert(pass1 && pass2)
  })

  it('queue.isFull()', () => {
    const q = new Queue(1)
    const pass1 = !q.isFull()
    q.push('test')
    const pass2 = q.isFull()
    assert(pass1 && pass2)
  })

  it('queue.size()', () => {
    const q = new Queue()
    q.push('test')
    assert(q.size() === 1)
  })

  it('queue.pop()', () => {
    const q = new Queue()
    const obj1 = { a: 'test' }
    const obj2 = { a: 'test2' }
    q.push(obj1)
    q.push(obj2)
    const pass1 = q.pop() === obj1
    const pass2 = q.pop() === obj2
    assert(pass1 && pass2)
  })

  it('queue.popBack()', () => {
    const q = new Queue()
    const obj1 = { a: 'test' }
    const obj2 = { a: 'test2' }
    q.push(obj1)
    q.push(obj2)
    const pass1 = q.popBack() === obj2
    const pass2 = q.popBack() === obj1
    assert(pass1 && pass2)
  })

  it('queue.front()', () => {
    const q = new Queue()
    const obj1 = { a: 'test' }
    const obj2 = { a: 'test2' }
    q.push(obj1)
    q.push(obj2)
    assert(q.front() === obj1)
  })

  it('queue.back()', () => {
    const q = new Queue()
    const obj1 = { a: 'test' }
    const obj2 = { a: 'test2' }
    q.push(obj1)
    q.push(obj2)
    assert(q.back() === obj2)
  })

  it('queue.clear()', () => {
    const q = new Queue()
    const obj1 = { a: 'test' }
    const obj2 = { a: 'test2' }
    q.push(obj1)
    q.push(obj2)
    q.clear()
    assert(q.size() === 0 && q.isEmpty())
  })
})
