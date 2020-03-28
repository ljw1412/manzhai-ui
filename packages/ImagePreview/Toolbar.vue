<template>
  <transition name="mz-fade">
    <div v-show="visible"
      class="mz-image-preview-toolbar"
      @mouseenter="$emit('hover',true)"
      @mouseleave="$emit('hover',false)">
      <m-button v-for="btn of btns"
        :key="btn.action"
        :icon="btn.icon"
        :title="btn.title"
        @click="emitAction(btn.action)"></m-button>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MButton from './Button.vue'

@Component({ components: { MButton } })
export default class MzImagePreviewToolbar extends Vue {
  @Prop(Boolean)
  readonly visible!: boolean
  @Prop(Boolean)
  readonly isPlay!: boolean
  @Prop(Boolean)
  readonly isDisplayThumbnail!: boolean
  @Prop({ type: [String, Array], default: 'play,thumbnail,close' })
  readonly layout!: string | string[]

  get btns() {
    let layout = this.layout
    if (typeof layout === 'string') {
      layout = layout.replace(/ /g, '').split(',')
    }
    return [
      {
        action: 'play',
        title: this.isPlay ? '暂停' : '播放',
        icon: this.isPlay ? 'md-pause' : 'md-play'
      },
      {
        action: 'thumbnail',
        title: '缩略图',
        icon: 'md-images'
      },
      {
        action: 'close',
        title: '关闭',
        icon: 'md-close'
      }
    ].filter(item => layout.includes(item.action))
  }

  emitAction(action: string) {
    this.$emit('action', action)
  }
}
</script>
