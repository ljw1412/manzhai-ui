<template>
  <div v-show="active"
    class="mz-carousel-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'
import { MzCarousel } from '.'

@Component
export default class MzCarouselItem extends Vue {
  @Inject('mzCarousel')
  readonly mzCarousel!: MzCarousel

  active = false

  created() {
    this.mzCarousel && this.mzCarousel.itemList.push(this)
  }

  beforeDestroy() {
    this.mzCarousel && this.mzCarousel.itemList.remove(this)
  }
}
</script>

<style lang="scss">
.mz-carousel-item {
  width: 100%;
  height: 100%;
}
</style>
