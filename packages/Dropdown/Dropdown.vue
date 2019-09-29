<template>
  <div class="mz-dropdown">
    <slot :changeVisiable="changeVisiable"></slot>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'
import { MzList, MzListItem, MzListGroup } from '../List/index'

@Component({
  components: {
    MzList,
    MzListItem,
    MzListGroup
  }
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

  mVisiable = false

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
</style>
