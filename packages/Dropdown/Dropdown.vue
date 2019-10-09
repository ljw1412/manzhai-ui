<template>
  <div class="mz-dropdown">
    <span ref="reference">
      <slot :changeVisiable="changeVisiable"></slot>
    </span>
    <mz-card v-show="mVisiable"
      ref="popperCard"
      class="mz-dropdown__card"
      :style="cardStyles">
      <mz-list :value="value"
        @change="onValueChange">
        <mz-list-item v-for="item of list"
          ripple
          :data="item"
          :key="item[valueName]"
          :value="item[valueName]"
          :label="item[labelName] || item[valueName]"></mz-list-item>
      </mz-list>
    </mz-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Ref } from 'vue-property-decorator'
import getZIndex from '@/utils/zindex'
import { MzList, MzListItem, MzListGroup } from '../List/index'
import MzCard from '../Card/index'
import Popper from 'popper.js'

@Component({
  components: { MzCard, MzList, MzListItem, MzListGroup }
})
export default class MzDropdown extends Vue {
  @Prop({ default: () => [] })
  readonly list!: Record<string, any>
  @Prop()
  readonly value!: any
  @Prop({ default: 'value' })
  readonly valueName!: string
  @Prop({ default: 'label' })
  readonly labelName!: string
  @Prop({ default: '300px' })
  readonly maxWidth!: string
  @Prop({ default: '400px' })
  readonly maxHeight!: string
  @Prop([Number, String])
  readonly zIndex!: number | string
  @Ref('reference')
  readonly reference!: HTMLElement
  @Ref('popperCard')
  readonly popperCard!: Vue

  mVisiable = false
  popper?: Popper

  get cardStyles() {
    return {
      maxWidth: this.maxWidth,
      maxHeight: this.maxHeight,
      zIndex: this.zIndex || getZIndex()
    }
  }

  onValueChange(value: any, data: any) {
    this.$emit('input', value)
    this.$emit('change', value, data)
  }

  changeVisiable() {
    this.mVisiable = !this.mVisiable
    if (this.popper) this.popper.update()
  }

  mounted() {
    console.log('slots', this.$scopedSlots.default)

    this.popper = new Popper(this.reference, this.popperCard.$el, {
      placement: 'bottom'
    })
    document.body.appendChild(this.popperCard.$el)
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
// .mz-dropdown {
//   &__card {
//     position: absolute;
//     z-index: 1000;
//   }
// }
</style>
