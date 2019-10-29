<template>
  <div ref="wrapper"
    class="mz-scrollbar-view-wrapper"
    @mousewheel="onMousewheel"
    @touchstart=" handleTouchstart">
    <div ref="content"
      class="mz-scrollbar-view"
      :style="viewStyles">
      <slot></slot>
    </div>
    <div v-if="!hiddenBar && isThumbShow.y"
      ref="barY"
      class="mz-scrollbar mz-scrollbar--vertical"
      :class="{
        'mz-scrollbar--drag': ['y','xy'].includes(thumb.direction),
        'mz-scrollbar--round':round
      }"
      :style="scrollbarYStyles">
      <div ref="thumbY"
        class="mz-scrollbar__thumb"
        :style="thumbYStyles"
        @mousedown.stop="handleThumbDragStart($event,'y')"></div>
    </div>
    <div v-if="!hiddenBar && isThumbShow.x"
      ref="barX"
      class="mz-scrollbar mz-scrollbar--horizontal"
      :class="{
        'mz-scrollbar--drag': ['x','xy'].includes(thumb.direction),
        'mz-scrollbar--round':round
      }"
      :style="scrollbarXStyles">
      <div ref="thumbX"
        class="mz-scrollbar__thumb"
        :style="thumbXStyles"
        @mousedown.stop="handleThumbDragStart($event,'x')"></div>
    </div>
  </div>
</template>

<script>
import { on, off } from '@/utils/dom'
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
export default {
  name: 'VScrollbar',

  props: {
    // hover 悬浮界面时显示，不悬浮是半透明
    // always 总是显示
    showMode: { type: String, default: () => 'hover' },
    // 内容的样式
    contentStyle: { type: [Object, String], default: () => ({}) },
    // 滚动条轨道颜色
    barColor: String,
    // 滚动条滑块颜色
    thumbColor: String,
    // 垂直导航栏距离右边的距离
    right: String,
    // 水平导航栏距离底部的距离
    bottom: String,
    // 滚动条宽度
    barWidth: { type: Number, default: 6 },
    // 圆边模式
    round: Boolean,
    // 隐藏滚动条
    hiddenBar: Boolean
  },

  computed: {
    wrapClasses() {
      return `scroll-view__wrapper--${this.showMode}`
    },

    viewStyles() {
      return [
        this.contentStyle,
        {
          transform: `translate(${this.x}px, ${this.y}px)`
        }
      ]
    },

    scrollableArea() {
      const area = {
        x: this.wrapper.width - this.content.width,
        y: this.wrapper.height - this.content.height
      }
      Object.keys(area).forEach(key => {
        if (area[key] > 0) area[key] = 0
      })
      return area
    },

    isThumbShow() {
      return {
        x: this.scrollableArea.x < 0,
        y: this.scrollableArea.y < 0
      }
    },

    //垂直(Y轴)外:内 比例
    yScale() {
      if (!this.content.height) return 0
      return this.wrapper.height / this.content.height
    },

    // 水平(X轴)外:内 比例
    xScale() {
      if (!this.content.width) return 0
      return this.wrapper.width / this.content.width
    },

    scrollbarYStyles() {
      return {
        right: this.right,
        width: this.barWidth + 'px',
        'background-color': this.barColor
      }
    },

    thumbYStyles() {
      return {
        height: this.yScale * 100 + '%',
        transform: `translateY(${-this.y * this.yScale}px)`,
        'background-color': this.thumbColor
      }
    },

    scrollbarXStyles() {
      return {
        bottom: this.bottom,
        height: this.barWidth + 'px',
        'background-color': this.barColor
      }
    },

    thumbXStyles() {
      return {
        width: this.xScale * 100 + '%',
        transform: `translateX(${-this.x * this.xScale}px)`,
        'background-color': this.thumbColor
      }
    }
  },

  data() {
    return {
      // 内容层位移量
      y: 0,
      x: 0,
      // 外层宽高
      wrapper: { width: 0, height: 0 },
      content: { width: 0, height: 0 },
      // 滚动条
      thumb: { direction: '', x: 0, y: 0 }
    }
  },

  methods: {
    contentResize() {
      this.content.width = this.$refs.content.scrollWidth
      this.content.height = this.$refs.content.scrollHeight
      this.wrapper.width = this.$refs.wrapper.clientWidth
      this.wrapper.height = this.$refs.wrapper.clientHeight
      this.scroll('x', 0)
      this.scroll('y', 0)
    },

    /**
     * 滚动
     * @param direction 方向: x,y
     * @param delta 滚动量
     */
    scroll(direction, delta) {
      if (!['x', 'y'].includes(direction)) return
      const temp = this[direction] - delta
      if (temp > 0) {
        this[direction] = 0
      } else if (temp < this.scrollableArea[direction]) {
        this[direction] = this.scrollableArea[direction]
      } else {
        this[direction] = temp
      }
    },

    // 滚动条按下时
    handleThumbDragStart(e, thumb) {
      this.thumb.direction = thumb
      this.thumb.y = e.clientY
      this.thumb.x = e.clientX

      on(window, 'mousemove', this.handleThumbDrag)
      on(window, 'mouseup', this.handleThumbDragEnd)
      document.onselectstart = () => false
    },

    // 滚动条移动时
    handleThumbDrag(e) {
      if (this.thumb.direction === 'y') {
        const deltaY = (e.clientY - this.thumb.y) / this.yScale
        this.scroll('y', deltaY)
        this.thumb.y = e.clientY
      } else {
        const deltaX = (e.clientX - this.thumb.x) / this.xScale
        this.scroll('x', deltaX)
        this.thumb.x = e.clientX
      }
    },

    // 滚动条移动结束
    handleThumbDragEnd(e) {
      off(window, 'mousemove', this.handleThumbDrag)
      off(window, 'mouseup', this.handleThumbDragEnd)
      document.onselectstart = null
      this.thumb.direction = ''
    },

    // 鼠标滚轮事件
    onMousewheel(e) {
      this.scroll('x', e.deltaX)
      this.scroll('y', e.deltaY)
    },

    // 触摸事件开始
    handleTouchstart(e) {
      if (!e.touches || e.touches.length > 1) return
      this.thumb.direction = 'xy'
      this.thumb.y = e.touches[0].clientY
      this.thumb.x = e.touches[0].clientX
      on(window, 'touchmove', this.handleTouchmove)
      on(window, 'touchend', this.handleTouchend)
    },

    // 触摸事件移动
    handleTouchmove(e) {
      if (!e.touches || e.touches.length > 1) return
      const deltaY = this.thumb.y - e.touches[0].clientY
      this.scroll('y', deltaY)
      this.thumb.y = e.touches[0].clientY
      const deltaX = this.thumb.x - e.touches[0].clientX
      this.scroll('x', deltaX)
      this.thumb.x = e.touches[0].clientX
    },

    // 触摸事件结束
    handleTouchend(e) {
      this.thumb.direction = ''
      off(window, 'touchmove', this.handleTouchmove)
      off(window, 'touchend', this.handleTouchend)
    }
  },

  mounted() {
    addResizeListener(this.$refs.wrapper, this.contentResize)
    addResizeListener(this.$refs.content, this.contentResize)
  },

  beforeDestroy() {
    removeResizeListener(this.$refs.wrapper, this.contentResize)
    removeResizeListener(this.$refs.content, this.contentResize)
  }
}
</script>

<style lang="scss">
* {
  user-select: none;
}
.mz-scrollbar-view-wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
  &:hover,
  &--always {
    .mz-scrollbar {
      opacity: 1;
    }
  }
}

.mz-scrollbar {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99999;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  background-color: rgba($color: #ccc, $alpha: 0.3);
  &--round {
    border-radius: 4px;
  }
  &--horizontal {
    height: 6px;
    left: 0;
    .mz-scrollbar__thumb {
      height: 100%;
    }
  }

  &--vertical {
    width: 6px;
    top: 0;
    .mz-scrollbar__thumb {
      width: 100%;
    }
  }

  &__thumb {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    cursor: pointer;
    border-radius: inherit;
    background-color: hsla(223, 3%, 50%, 0.4);
    transition: background-color 0.3s;
  }

  &--drag {
    opacity: 1;
  }
}
</style>