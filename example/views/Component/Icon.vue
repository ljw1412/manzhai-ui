<template>
  <div class="component-icon">
    <mz-tabs v-model="iconType"
      align="right">
      <mz-tab value="ios"></mz-tab>
      <mz-tab value="md"></mz-tab>
    </mz-tabs>
    <mz-sub-header>图标</mz-sub-header>
    <div class="icon-grid">
      <div v-for="item of icons[iconType]"
        :key="item"
        class="icon-grid__cell flex-double-center">
        <mz-icon :name="item"
          size="40"></mz-icon>
      </div>
    </div>
    <mz-sub-header>logo</mz-sub-header>
    <div class="icon-grid">
      <div v-for="item of logos"
        :key="item"
        class="icon-grid__cell flex-double-center">
        <mz-icon :name="item"
          size="40"></mz-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import icons from '../../options/icon'

@Component
export default class ComponentIcon extends Vue {
  icons = icons
  logos = icons.logo
  iconType = 'md'
}
</script>

<style lang="scss" scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-auto-rows: minmax(70px, auto);
  &__cell {
    margin: 5px;
    fill: var(--color-text-primary);
    color: var(--color-text-primary);
    &:hover {
      border-radius: 5px;
      box-shadow: 0 1px 5px 0 currentColor;
      background-color: var(--color-body-background);
    }
  }
}
</style>
