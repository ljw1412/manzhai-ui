<template>
  <div class="mz-tab"
    :class="tabClasses"
    @click="onTabClick">
    {{label||value}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Prop } from 'vue-property-decorator'

@Component
export default class MzTab extends Vue {
  @Inject({ from: 'mzTabs', default: null })
  readonly mzTabs!: any
  @Prop()
  readonly value!: any
  @Prop(String)
  readonly label!: string
  @Prop(Boolean)
  readonly disabled!: boolean

  active = false

  get tabClasses() {
    return {
      'mz-tab--active': this.active,
      'mz-tab--disabled': this.disabled
    }
  }

  onTabClick() {
    this.$emit('click', this.value)
    this.mzTabs.setValue(this)
  }

  created() {
    if (this.mzTabs) this.mzTabs.addItem(this)
  }

  beforeDestroy() {
    if (this.mzTabs) this.mzTabs.removeItem(this)
  }
}
</script>

<style lang="scss">
.mz-tab {
  cursor: pointer;
  height: 100%;
  padding: 0 12px;
  fill: var(--color-text-secondary);
  color: var(--color-text-secondary);

  &--active {
    fill: var(--color-text-primary);
    color: var(--color-text-primary);
  }

  &--disabled {
    fill: var(--color-text-placeholder);
    color: var(--color-text-placeholder);
  }
}
</style>
