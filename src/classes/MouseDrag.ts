import { only } from 'manzhai-ui/src/utils/object'

export default class MzMouseDrag {
  initialX!: number
  initialY!: number
  x!: number
  y!: number
  startX: number = 0
  startY: number = 0
  deltaX: number = 0
  deltaY: number = 0
  moving = false
  button?: number
  auto = false
  _drag = this.drag.bind(this)
  _end = this.end.bind(this)

  /**
   *
   * @param x 初始的x位置
   * @param y 初始的y位置
   * @param button 允许的鼠标按键
   * @param auto 自动绑定后续事件
   */
  constructor(x: number = 0, y: number = 0, button?: number, auto?: Boolean) {
    this.initialX = this.x = x
    this.initialY = this.y = y
    this.button = button
    this.auto = !!auto
  }

  start(e: MouseEvent) {
    if (this.button !== undefined && e.button !== this.button) return false
    this.moving = true
    this.startX = e.clientX
    this.startY = e.clientY
    document.onselectstart = () => false
    if (this.auto) {
      window.addEventListener('mousemove', this._drag, false)
      window.addEventListener('mouseup', this._end, false)
    }
    return only(this, 'x y startX startY moving')
  }

  drag(e: MouseEvent) {
    if (this.moving) {
      this.deltaX = e.clientX - this.startX
      this.deltaY = e.clientY - this.startY
      this.x += this.deltaX
      this.y += this.deltaY
      this.startX = e.clientX
      this.startY = e.clientY
      return only(this, 'x y startX startY deltaX deltaY moving')
    }
    return false
  }

  end(e: MouseEvent) {
    this.moving = false
    document.onselectstart = null
    window.removeEventListener('mousemove', this._drag, false)
    window.removeEventListener('mouseup', this._end, false)
    return only(this, 'x y moving')
  }

  reset() {
    this.x = this.initialX
    this.y = this.initialY
  }
}
