<template>
  <div class="mz-list-item"
    @click="onItemClick">
    <div>{{ label || value }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'

@Component
export default class MzListItem extends Vue {
  @Prop()
  readonly data!: any
  @Prop(String)
  readonly label!: string
  @Prop({ required: true })
  readonly value!: string
  @Inject({ from: 'mzList', default: {} })
  readonly mzList!: any

  onItemClick() {
    this.$emit('item-click', this.data || this.value)
    if (this.mzList) {
      this.mzList.setValue(this.value, this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
