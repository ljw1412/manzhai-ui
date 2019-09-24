<template>
  <div class="mz-list">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'vue-property-decorator'
@Component({
  provide() {
    return { mzList: this }
  }
})
export default class MzList extends Vue {
  @Prop()
  readonly value!: any

  setValue(value: any, data: any) {
    this.$emit('input', value)
    this.$emit('change', value, data)
  }
}
</script>

<style lang="scss">
</style>
