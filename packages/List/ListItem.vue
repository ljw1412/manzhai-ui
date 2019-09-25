<template>
  <div v-ripple="ripple"
    class="mz-list-item"
    @click="onClick">
    <div class="mz-list-item__content">
      <div class="mz-list-item__title">{{ label || value }}</div>
    </div>
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
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object
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
.mz-list-item {
  padding: 0 16px;
  &__content {
    padding: 12px 0;
  }
}
</style>
