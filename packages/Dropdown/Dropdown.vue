<template>
  <div v-clickoutside="close"
    class="mz-dropdown">
    <slot></slot>
    <transition name="mz-fade">
      <mz-card v-show="mVisiable"
        ref="popper"
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
    </transition>
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
  @Prop(String)
  readonly minWidth!: string
  @Prop(String)
  readonly minHeight!: string
  @Prop({ default: '300px' })
  readonly maxWidth!: string
  @Prop(String)
  readonly maxHeight!: string
  @Prop([Number, String])
  readonly zIndex!: number | string
  // @Ref('reference')
  // readonly reference!: HTMLElement
  @Ref('popper')
  readonly popper!: Vue

  mVisiable = false
  mZIndex = getZIndex()
  mPopper?: Popper
  reference?: HTMLElement

  get cardStyles() {
    return {
      maxWidth: this.maxWidth,
      maxHeight: this.maxHeight,
      minWidth: this.minWidth,
      minHeight: this.minHeight,
      zIndex: this.zIndex || this.mZIndex
    }
  }

  onValueChange(value: any, data: any) {
    this.$emit('input', value)
    this.$emit('change', value, data)
  }

  changeVisiable() {
    this.mVisiable = !this.mVisiable
    if (this.mVisiable) this.mZIndex = getZIndex()
    if (this.mPopper) this.mPopper.update()
  }

  close(e: Event) {
    if (!this.popper.$el.contains(e.target as Node)) this.mVisiable = false
  }

  mounted() {
    // 请使用 不要使用 v-slot，会导致elm为 undefined
    if (this.$slots.default) {
      this.reference = this.$slots.default[0].elm as HTMLElement
    }
    if (this.reference) {
      this.mPopper = new Popper(this.reference, this.popper.$el, {
        placement: 'bottom'
      })
      this.reference.addEventListener('click', this.changeVisiable, false)
    }
    document.body.appendChild(this.popper.$el)
  }

  beforeDestroy() {
    if (this.reference) {
      this.reference.removeEventListener('click', this.changeVisiable, false)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
.mz-dropdown {
  display: inline-block;
}
</style>
