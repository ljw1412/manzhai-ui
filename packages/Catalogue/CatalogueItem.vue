<template>
  <div class="mz-catalogue-item"
    :class="{ 'mz-catalogue-item--active': active }"
    :data-level="level">
    <span ref="text"
      class="mz-catalogue-item__text"
      @click="scrollToTarget">{{title}}</span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch,
  Ref,
  Inject
} from 'vue-property-decorator'
import { scrollIntoView } from 'manzhai-ui/src/utils/dom'
import MzCatalogue from './Catalogue.vue'

@Component
export default class MzCatalogueItem extends Vue {
  @Inject('mzCatalogue')
  readonly mzCatalogue!: MzCatalogue
  @Prop(String)
  readonly title!: string
  @Prop(Boolean)
  readonly active!: boolean
  @Prop(Number)
  readonly level!: number
  @Prop(String)
  readonly target!: string
  @Prop(Boolean)
  readonly scrollSmooth!: boolean
  @Ref('text')
  readonly textRef!: HTMLSpanElement

  // 滚动到目标位置
  scrollToTarget() {
    if (this.target) scrollIntoView(this.target, this.scrollSmooth)
    this.$emit('click')
  }

  @Watch('active', { immediate: true })
  onActiveChange(active: boolean) {
    if (active) {
      this.$nextTick(() => {
        const rect = this.textRef.getBoundingClientRect()
        this.$emit('actived', rect.top, rect.height)
      })
    }
  }
}
</script>
