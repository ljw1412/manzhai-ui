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
  @Prop()
  readonly data!: any

  active = false
  reverse = false

  get transitionName() {
    let transition = null
    let reverseTransition = null
    if (this.mzCarousel) {
      if (this.mzCarousel.initing) return null
      const direction = this.mzCarousel.vertical ? 'y' : 'x'
      transition =
        this.mzCarousel.transition || `mz-view-${direction}-translate`
      reverseTransition =
        this.mzCarousel.reverseTransition ||
        `mz-view-${direction}-reverse-translate`
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
