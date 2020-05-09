<template>
  <div class="icon-grid-wrapper">
    <mz-tabs v-model="iconType"
      align="right">
      <mz-tab value="ios"></mz-tab>
      <mz-tab value="md"></mz-tab>
    </mz-tabs>
    <mz-sub-header>图标</mz-sub-header>
    <div class="icon-grid">
      <div v-for="(item, index) of iconList"
        :key="index"
        class="icon-grid__cell flex-double-center is-pointer"
        @click="coypCode(item)">
        <mz-icon :name="item"
          size="40px"></mz-icon>
      </div>
    </div>
    <mz-sub-header>logo</mz-sub-header>
    <div class="icon-grid">
      <div v-for="item of icons.logo"
        :key="item"
        class="icon-grid__cell flex-double-center">
        <mz-icon :name="item"
          size="40px"></mz-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import icons from '@example/options/icon'
import { copyText } from '@example/utils/string'

@Component
export default class DocIconGrid extends Vue {
  iconType: 'md' | 'ios' = 'md'
  icons = icons

  get iconList() {
    return this.icons[this.iconType]
  }

  coypCode(item: string) {
    copyText(`<mz-icon name="${item}"></mz-icon>`)
    this.$snackbar.show({ text: `图标 ${item} 代码复制成功`, timeout: 2000 })
  }
}
</script>

<style lang="scss">
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-auto-rows: minmax(70px, auto);
  &__cell {
    margin: 5px;
    color: var(--color-text-primary);
    &:hover {
      border-radius: 5px;
      box-shadow: 0 1px 5px 0 currentColor;
      background-color: var(--color-body-background);
    }
  }
}
</style>
