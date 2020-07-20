<template>
  <div ref="item"
    class="mz-theme-paletten-item flex-grow-1 fs-14 px-5 py-8"
    :class="colorClass"
    :style="{color:isLight?'#000':'#fff'}">
    <p>{{name}}</p>
    <p>{{hex}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import Color from 'color'

@Component
export default class MzThemePalettenItem extends Vue {
  @Prop(String)
  readonly name!: string
  @Ref('item')
  readonly itemRef!: HTMLDivElement

  color: any = ''

  get colorClass() {
    return this.name.replace(/\$/g, '')
  }

  get hex() {
    return this.color && Color(this.color).hex()
  }

  get isLight() {
    return !!this.color && Color(this.color).isLight()
  }

  updateColor() {
    this.$nextTick(() => {
      this.color = window.getComputedStyle(this.itemRef).backgroundColor
    })
  }

  mounted() {
    this.updateColor()
  }

  created() {
    this.$mzEventBus.$on('theme-change', (val: string) => {
      this.updateColor()
    })
  }

  beforeDestroy() {
    this.$mzEventBus.$off('theme-change')
  }
}
</script>

<style lang="scss">
@import './colors.scss';
.mz-theme-paletten-item {
  box-sizing: border-box;
  width: 0;
  @each $name, $value in $colors {
    &.#{$name} {
      background-color: $value;
    }
  }
}
</style>
