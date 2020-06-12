<template>
  <div class="icon-grid-wrapper">
    <div style="padding:10px 20%;">
      <mz-input v-model="keyword"
        shadow
        size="large"
        placeholder="请输入关键词">
        <mz-icon name="search"
          slot="prefix"></mz-icon>
      </mz-input>
    </div>
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
        class="icon-grid__cell">
        <div v-tooltip="{content: item, placement: 'bottom',interactive:true}"
          class="flex-double-center is-pointer"
          style="height:100%"
          @click="coypCode(item)">
          <mz-icon size="40px"
            :name="item"></mz-icon>
        </div>
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
  keyword = ''

  get iconList() {
    return this.icons[this.iconType].filter(name => name.includes(this.keyword))
  }

  coypCode(item: string) {
    copyText(`<mz-icon name="${item}"></mz-icon>`)
    this.$snackbar.show({ content: `图标 ${item} 代码复制成功`, timeout: 2000 })
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
