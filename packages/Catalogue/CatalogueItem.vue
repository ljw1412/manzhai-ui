<template>
  <div class="mz-catalogue-item"
    :class="{ 'mz-catalogue-item--active': active }"
    :data-level="level">
    <span class="mz-catalogue-item__text"
      @click="scrollToTarget">{{title}}</span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzCatalogueItem extends Vue {
  @Prop(String)
  readonly title!: string
  @Prop(Boolean)
  readonly active!: boolean
  @Prop(Number)
  readonly level!: number
  @Prop(String)
  readonly target!: string
  @Prop(Boolean)
  readonly scrollByJs!: boolean

  // 滚动到目标位置
  scrollToTarget() {
    if (this.target) {
      if (this.scrollByJs) {
        const targetEl = document.querySelector(`#${this.target}`)
        if (!targetEl) {
          console.warn('[MzCatalogue]', `目标锚点${this.target}不存在`)
          return
        }
        // firefox 36+ | chrome 61+ | Opera 48+
        targetEl.scrollIntoView({ behavior: 'smooth' })
      } else {
        location.hash = `#${this.target}`
      }
    }
  }
}
</script>

<style lang="scss">
.mz-catalogue-item {
  --mz-catalogue-item__font-color: var(--color-text-regular);
  --mz-catalogue-item__font-weight: 400;

  &__text {
    cursor: pointer;
    text-decoration: none;
    color: var(--mz-catalogue-item__font-color);
    transition: all 0.3s;
    font-size: 15px;
    line-height: 20px;
    font-weight: var(--mz-catalogue-item__font-weight);
    &:hover {
      --mz-catalogue-item__font-color: var(--color-primary);
      opacity: 0.8;
    }
  }

  &[data-level='1'] > .mz-catalogue-item__text {
    --mz-catalogue-item__font-weight: 600;
  }

  @for $i from 1 through 6 {
    &[data-level='#{$i}'] {
      margin: 5px 0;
      padding-left: 10px * ($i - 1);
    }
  }

  &--active > .mz-catalogue-item__text {
    --mz-catalogue-item__font-color: var(--color-primary);
    --mz-catalogue-item__font-weight: 500;
    font-size: 16px;
  }
}
</style>
