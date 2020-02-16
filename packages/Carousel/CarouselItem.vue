<template>
  <transition :name="transitionName">
    <div v-show="active"
      class="mz-carousel-item">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'
import { MzCarousel } from '.'

@Component
export default class MzCarouselItem extends Vue {
  @Inject('mzCarousel')
  readonly mzCarousel!: MzCarousel | null

  active = false
  reverse = false

  get transitionName() {
    let transition = 'mz-x-transition'
    let reverseTransition = 'mz-x-reverse-transition'
    if (this.mzCarousel) {
      if (this.mzCarousel.initing) return null
      transition = this.mzCarousel.transition
      reverseTransition = this.mzCarousel.reverseTransition
    }
    return this.reverse ? reverseTransition : transition
  }

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
