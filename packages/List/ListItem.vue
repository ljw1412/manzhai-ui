<template>
  <div class="mz-list-item"
    @click="onClick">
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
  @Inject({ from: 'mzList', default: null })
  readonly mzList!: any

  onClick() {
    this.$emit('click', this.value, this.data)
    if (this.mzList) {
      this.mzList.setValue(this.value, this.data)
    }
  }
}
</script>

<style lang="scss">
</style>
