<template>
  <div class="icon-grid-wrapper">
    <mz-tabs v-model="iconType"
      align="center">
      <mz-tab value="outline"></mz-tab>
      <mz-tab value="filled"></mz-tab>
      <mz-tab value="sharp"></mz-tab>
      <mz-tab value="logo"></mz-tab>
    </mz-tabs>
    <div class="icon-grid">
      <div v-for="(item, index) of iconList"
        :key="index"
        class="icon-grid__cell flex-double-center is-pointer"
        @click="coypCode(item)">
        <mz-icon v-tooltip="{content: item, placement: 'bottom'}"
          :name="item"
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
  iconType: 'outline' | 'filled' | 'sharp' | 'logo' = 'outline'
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
