<template>
  <div v-if="scrollSize > viewSize"
    class='mz-bar'
    :class="barClasses">
    <div class="mz-bar__thumb"
      :style="thumbStyles"
      @mousedown="onThumbMousedown"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { on, off } from '../../src/utils/dom'

@Component
export default class MzBar extends Vue {
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

  get barClasses() {
    return {
      'mz-bar--x': this.x,
      'mz-bar--y': this.y
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
    const styles: Record<string, any> = {}
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
    if (this.translate + deltaMove > this.maxTranslate) {
      this.translate = this.maxTranslate
    } else if (this.translate + deltaMove < 0) {
      this.translate = 0
    } else {
      this.translate += deltaMove
    }
    this.$emit(
      'translate',
      this.x ? 'x' : this.y ? 'y' : '',
      (this.translate / this.viewSize) * this.scrollSize
    )
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
  }

  onThumbMousemove(e: MouseEvent) {
    let currentPoint = 0
    let deltaMove = 0
    if (this.x) {
      currentPoint = e.clientX
    } else if (this.y) {
      currentPoint = e.clientY
    }
    deltaMove = currentPoint - this.dragPoint
    this.dragPoint = currentPoint
    this.setTranslate(deltaMove)
  }

  onThumbMouseup(e: MouseEvent) {
    off(window, 'mousemove', this.onThumbMousemove)
    off(window, 'mouseup', this.onThumbMouseup)
    document.onselectstart = null
  }
}
</script>

<style lang="scss">
.mz-bar {
  --mz-bar__thumb-background-color: var(--color-primary);
  position: absolute;
  &--x {
    width: 100%;
    left: 0;
    bottom: 0;
  }
  &--y {
    height: 100%;
    top: 0;
    right: 0;
  }
  &__thumb {
    background-color: var(--mz-bar__thumb-background-color);
  }
}
</style>
