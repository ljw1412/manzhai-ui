<template>
  <transition name="mz-fade">
    <div v-show="visible"
      class="mz-image-preview-action-bar absolute-horizontal-center"
      @mouseenter="$emit('hover',true)"
      @mouseleave="$emit('hover',false)">
      <m-button icon="md-add-circle-outline"
        @click="emitAction('zoom-in')" />
      <m-button text="100%"
        @click="emitAction('reset')" />
      <m-button icon="md-remove-circle-outline"
        @click="emitAction('zoom-out')" />
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

  emitAction(action: string) {
    this.$emit('action', action)
  }
}
</script>

<style lang="scss">
.mz-image-preview-action-bar {
  z-index: 9996;
  top: initial;
  bottom: 0;
  height: 50px;
  background-color: rgba(30, 30, 30, 0.6);
  display: flex;
  .mz-image-preview-button {
    width: 50px;
    &.is-text {
      width: 70px;
    }
  }
}
</style>
