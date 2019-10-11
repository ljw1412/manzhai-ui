<template>
  <div v-clickoutside="close"
    class="mz-dropdown">
    <slot change-display="changeDisplay"></slot>
    <transition name="mz-fade">
      <mz-card v-show="mVisiable"
        ref="popper"
        class="mz-dropdown__card"
        :style="cardStyles">
        <mz-list :value="value"
          :size="size"
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
import {
  Component,
  Vue,
  Prop,
  PropSync,
  Ref,
  Watch
} from 'vue-property-decorator'
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
  @Prop({ default: 'bottom' })
  readonly placement!: Popper.Placement
  @Prop({ default: 'small' })
  readonly size!: string
  @Prop(Boolean)
  readonly disabled!: boolean
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

  isAddBody = false
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
    if (this.disabled) return
    this.mVisiable = !this.mVisiable
    if (this.mVisiable) this.mZIndex = getZIndex()
    if (this.mPopper) this.mPopper.update()
  }

  close(e: Event) {
    if (!this.popper.$el.contains(e.target as Node)) this.mVisiable = false
  }

  bindPopper() {
    // 请使用 不要使用 v-slot，会导致elm为 undefined
    if (this.$slots.default) {
      this.reference = this.$slots.default[0].elm as HTMLElement
    }
    if (this.reference) {
      this.mPopper = new Popper(this.reference, this.popper.$el, {
        placement: this.placement
      })
      this.reference.addEventListener('click', this.changeVisiable, false)
    }
    if (!this.isAddBody) {
      document.body.appendChild(this.popper.$el)
      this.isAddBody = true
    }
  }

  destroyPopper() {
    if (this.mPopper) {
      const popperElm = this.popper.$el as HTMLElement
      const styles = popperElm.getAttribute('style')
      // console.dir(popperElm.getAttribute('style'))

      this.mPopper.destroy()
      if (styles) popperElm.setAttribute('style', styles)
    }
  }

  @Watch('mVisiable')
  onVisiableChange(val: boolean) {
    if (this.mPopper) {
      val ? this.bindPopper() : this.destroyPopper()
    }
  }

  @Watch('placement')
  onPlacementChange(val: string) {
    if (this.mPopper) {
      this.destroyPopper()
      this.$nextTick(this.bindPopper)
    }
  }

  mounted() {
    this.bindPopper()
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
  &__card {
    position: absolute;
  }
}
</style>
