<template>
  <div class="mz-dropdown">
    <slot :changeVisiable="changeVisiable"></slot>
    <mz-card class="mz-dropdown__card"
      :style="cardStyles">
      <mz-list :value="value"
        v-show="mVisiable"
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
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'
import { MzList, MzListItem, MzListGroup } from '../List/index'
import MzCard from '../Card/index'

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

  mVisiable = false

  get cardStyles() {
    return {
      maxWidth: this.maxWidth,
      maxHeight: this.maxHeight
    }
  }

  onValueChange(value: any, data: any) {
    this.$emit('input', value)
    this.$emit('change', value, data)
  }

  changeVisiable() {
    this.mVisiable = !this.mVisiable
  }
}
</script>

<style lang="scss">
.mz-dropdown {
  &__card {
    position: absolute;
    z-index: 1000;
  }
}
</style>
