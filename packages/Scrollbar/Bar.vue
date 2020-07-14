<template>
  <div v-if="scrollSize > viewSize"
    class='mz-bar'
    :class="barClasses">
    <div class="mz-bar__thumb"
      :class="mColorClass.bg"
      :style="thumbStyles"
      @mousedown="onThumbMousedown"
      @touchstart.stop="onTouchstart"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { on, off } from 'manzhai-ui/src/utils/dom'
import MzColor from 'manzhai-ui/src/mixins/MzColor'

@Component
export default class MzBar extends MzColor {
  @Prop(Boolean)
  readonly x!: boolean
  @Prop(Boolean)
  readonly y!: boolean
  @Prop({ type: String, default: '15px' })
  readonly barSize!: string
  @Prop(Number)
  readonly scrollSize!: number
  @Prop(Number)
  readonly viewSize!: number

  translate = 0
  dragPoint = 0
  isDrag = false

  get barClasses() {
    return {
      'mz-bar--x': this.x,
      'mz-bar--y': this.y,
      'mz-bar--drag': this.isDrag
    }
  }

  get thumbSize() {
    if (!this.viewSize || !this.scrollSize) return 0
    return this.viewSize / this.scrollSize
  }

  get maxTranslate() {
    return this.viewSize * (1 - this.thumbSize)
  }

  get thumbStyles() {
    const styles: Record<string, any> = {
      backgroundColor: this.mColor.bg
    }
    if (this.x) {
      Object.assign(styles, {
        height: this.barSize,
        width: this.thumbSize * 100 + '%',
        transform: `translateX(${this.translate}px)`
      })
    }
    if (this.y) {
      Object.assign(styles, {
        width: this.barSize,
        height: this.thumbSize * 100 + '%',
        transform: `translateY(${this.translate}px)`
      })
    }
    return styles
  }

  setTranslate(deltaMove: number) {
    this.translate = Math.min(
      Math.max(this.translate + deltaMove, 0),
      this.maxTranslate
    )
    this.$emit(
      'translate',
      this.x ? 'x' : this.y ? 'y' : '',
      (this.translate / this.viewSize) * this.scrollSize
    )
  }

  moveThumb(clientX: number, clientY: number) {
    let currentPoint = 0
    let deltaMove = 0
    if (this.x) {
      currentPoint = clientX
    } else if (this.y) {
      currentPoint = clientY
    }
    deltaMove = currentPoint - this.dragPoint
    this.dragPoint = currentPoint
    this.setTranslate(deltaMove)
  }

  onThumbMousedown(e: MouseEvent) {
    if (this.x) {
      this.dragPoint = e.clientX
    } else if (this.y) {
      this.dragPoint = e.clientY
    }
    on(window, 'mousemove', this.onThumbMousemove)
    on(window, 'mouseup', this.onThumbMouseup)
    document.onselectstart = () => false
    this.isDrag = true
  }

  onThumbMousemove(e: MouseEvent) {
    this.moveThumb(e.clientX, e.clientY)
  }

  onThumbMouseup(e: MouseEvent) {
    off(window, 'mousemove', this.onThumbMousemove)
    off(window, 'mouseup', this.onThumbMouseup)
    document.onselectstart = null
    this.isDrag = false
  }

  onTouchstart(e: TouchEvent) {
    if (!e.touches || e.touches.length > 1) return
    if (this.x) {
      this.dragPoint = e.touches[0].clientX
    } else if (this.y) {
      this.dragPoint = e.touches[0].clientY
    }
    on(window, 'touchmove', this.handleTouchmove)
    on(window, 'touchend', this.handleTouchend)
  }

  // 触摸事件移动
  handleTouchmove(e: TouchEvent) {
    if (!e.touches || e.touches.length > 1) return
    this.moveThumb(e.touches[0].clientX, e.touches[0].clientY)
  }

  // 触摸事件结束
  handleTouchend(e: TouchEvent) {
    off(window, 'touchmove', this.handleTouchmove)
    off(window, 'touchend', this.handleTouchend)
  }
}
</script>
