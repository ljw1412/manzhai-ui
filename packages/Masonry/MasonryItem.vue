<template>
  <div class="mz-masonry-item">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'
import { MzMasonry } from '.'

@Component
export default class MzMasonryItem extends Vue {
  @Inject('mzMasonry')
  readonly mzMasonry!: MzMasonry

  created() {
    this.mzMasonry && this.mzMasonry.itemList.push(this)
  }

  beforeDestroy() {
    this.mzMasonry && this.mzMasonry.itemList.remove(this)
  }
}
</script>

<style lang="scss" >
</style>
