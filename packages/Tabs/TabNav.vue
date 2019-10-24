<template>
  <div class="mz-tab-nav">
    <div v-for="(item,index) of tabItems"
      v-ripple="!item.disabled && item.ripple"
      class="mz-tab color-transition"
      :key="index"
      :class="item.tabClasses"
      @click="item.onTabClick">
      {{item.label||item.value}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'

@Component
export default class MzTabNav extends Vue {
  @Inject({ from: 'mzTabs', default: null })
  readonly mzTabs!: any

  get tabItems() {
    return (this.mzTabs && this.mzTabs.itemList) || []
  }
}
</script>

<style lang="scss">
.mz-tab-nav {
  display: flex;
  height: 36px;
  line-height: 36px;
}
</style>
