<template>
  <transition name="mz-fade">
    <div v-show="visible"
      class="mz-image-preview-action-bar absolute-horizontal-center"
      @mouseenter="$emit('hover',true)"
      @mouseleave="$emit('hover',false)">
      <m-button title="缩小"
        icon="md-remove-circle-outline"
        @click="emitAction('zoom-out')" />
      <m-button title="还原"
        :text="`${zoomStr}%`"
        @click="emitAction('reset')" />
      <m-button title="放大"
        icon="md-add-circle-outline"
        @click="emitAction('zoom-in')" />
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MButton from './Button.vue'

@Component({ components: { MButton } })
export default class MzImagePreviewActionBar extends Vue {
  @Prop(Boolean)
  readonly visible!: boolean
  @Prop(Number)
  readonly zoom!: number

  get zoomStr() {
    return (this.zoom * 100).toFixed(0)
  }

  emitAction(action: string) {
    this.$emit('action', action)
  }
}
</script>
