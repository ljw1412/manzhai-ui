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
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'
import { scrollIntoView } from '../../src/utils/dom'

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
  @Ref('text')
  readonly textRef!: HTMLSpanElement

  // 滚动到目标位置
  scrollToTarget() {
    if (this.target) scrollIntoView(this.target, this.scrollByJs)
    this.$emit('click')
  }

  @Watch('active', { immediate: true })
  onActiveChange(active: boolean) {
    if (active) {
      this.$nextTick(() => {
        const rect = this.textRef.getBoundingClientRect()
        this.$emit('actived', rect.top + rect.height / 2)
      })
    }
  }
}
</script>

<style lang="scss">
.mz-catalogue-item {
  --mz-catalogue-item__font-color: var(--color-text-regular);
  --mz-catalogue-item__font-weight: 400;

  position: relative;

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

  @for $i from 1 through 9 {
    &[data-level='#{$i}'] {
      margin: 5px 0;
      padding-left: 10px;
    }
  }

  &--active {
    --mz-catalogue-item__font-color: var(--color-primary);
    --mz-catalogue-item__font-weight: 500;
    > .mz-catalogue-item__text {
      font-size: 16px;
    }
  }
}

.mz-catalogue--sidebar .mz-catalogue-item {
  &[data-level='1']::before {
    content: '';
    position: absolute;
    left: -23px;
    top: 6px;
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: var(
      --mz-catalogue__sidebar-point-color,
      var(--mz-catalogue__sidebar-color)
    );
    transition: all 0.3s;
  }
  &--active[data-level='1']::before {
    background-color: var(--mz-catalogue-item__font-color);
  }
}
</style>
