<template>
  <div class="mz-theme-paletten">
    <div v-for="(list,index) of data"
      :key="index"
      class="mz-theme-paletten-list">
      <palette-item v-for="item of list"
        :name="item.name"
        :key="item.name"></palette-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PaletteItem from './PaletteItem.vue'

@Component({ components: { PaletteItem } })
export default class MzThemePaletten extends Vue {
  @Prop({ type: Array, default: () => [] })
  readonly data!: any[]
}
</script>

<style lang="scss">
.mz-theme-paletten-list {
  display: flex;
}
</style>
