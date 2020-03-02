<template>
  <transition name="mz-fade">
    <div v-show="visible"
      class="mz-image-preview-button"
      @mouseenter="$emit('hover',true)"
      @mouseleave="$emit('hover',false)">
      <mz-button border-radius="0"
        font-color="#ccc"
        :icon="!!icon"
        :disabled="disabled"
        @click="$emit('click',$event)">
        <mz-icon v-if="icon"
          :name="icon"></mz-icon>
        <span v-else>{{text}}</span>
      </mz-button>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MzButton from '../Button/index'

@Component({ components: { MzButton } })
export default class MzImagePreviewButton extends Vue {
  @Prop(Boolean)
  readonly visible!: boolean
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(String)
  readonly icon!: string
  @Prop(String)
  readonly text!: string
}
</script>

<style lang="scss" scoped>
.mz-image-preview-button {
  background-color: rgba(30, 30, 30, 0.6);
  .mz-button {
    width: 100%;
    height: 100%;
    padding: 0;
    --mz-button__font-size: 20px;
  }
}
</style>
