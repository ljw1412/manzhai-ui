<template>
  <transition name="mz-fade">
    <div v-show="visible"
      class="mz-image-preview-button"
      :class="{'is-text':!icon}"
      @mouseenter="$emit('hover',true)"
      @mouseleave="$emit('hover',false)">
      <mz-button radius="0"
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
import { MzButton } from '../Button/index'

@Component({ components: { MzButton } })
export default class MzImagePreviewButton extends Vue {
  @Prop({ type: Boolean, default: true })
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
</style>
