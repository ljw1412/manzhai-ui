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
$colors: (
  'white': $white,
  'gray-100': $gray-100,
  'gray-200': $gray-200,
  'gray-300': $gray-300,
  'gray-400': $gray-400,
  'gray-500': $gray-500,
  'gray-600': $gray-600,
  'gray-700': $gray-700,
  'gray-800': $gray-800,
  'gray-900': $gray-900,
  'black': $black,
  'blue': $blue,
  'indigo': $indigo,
  'purple': $purple,
  'pink': $pink,
  'red': $red,
  'orange': $orange,
  'yellow': $yellow,
  'green': $green,
  'teal': $teal,
  'cyan': $cyan,
  'primary': $primary,
  'secondary': $secondary,
  'success': $success,
  'warning': $warning,
  'danger': $danger,
  'light': $light,
  'dark': $dark,
  'primary-100': $primary-100,
  'primary-200': $primary-200,
  'primary-300': $primary-300,
  'primary-400': $primary-400,
  'primary-500': $primary-500,
  'primary-600': $primary-600,
  'primary-700': $primary-700,
  'primary-800': $primary-800,
  'primary-900': $primary-900,
  'secondary-100': $secondary-100,
  'secondary-200': $secondary-200,
  'secondary-300': $secondary-300,
  'secondary-400': $secondary-400,
  'secondary-500': $secondary-500,
  'secondary-600': $secondary-600,
  'secondary-700': $secondary-700,
  'secondary-800': $secondary-800,
  'secondary-900': $secondary-900,
  'success-100': $success-100,
  'success-200': $success-200,
  'success-300': $success-300,
  'success-400': $success-400,
  'success-500': $success-500,
  'success-600': $success-600,
  'success-700': $success-700,
  'success-800': $success-800,
  'success-900': $success-900,
  'warning-100': $warning-100,
  'warning-200': $warning-200,
  'warning-300': $warning-300,
  'warning-400': $warning-400,
  'warning-500': $warning-500,
  'warning-600': $warning-600,
  'warning-700': $warning-700,
  'warning-800': $warning-800,
  'warning-900': $warning-900,
  'danger-100': $danger-100,
  'danger-200': $danger-200,
  'danger-300': $danger-300,
  'danger-400': $danger-400,
  'danger-500': $danger-500,
  'danger-600': $danger-600,
  'danger-700': $danger-700,
  'danger-800': $danger-800,
  'danger-900': $danger-900,
  'blue-100': $blue-100,
  'blue-200': $blue-200,
  'blue-300': $blue-300,
  'blue-400': $blue-400,
  'blue-500': $blue-500,
  'blue-600': $blue-600,
  'blue-700': $blue-700,
  'blue-800': $blue-800,
  'blue-900': $blue-900,
  'indigo-100': $indigo-100,
  'indigo-200': $indigo-200,
  'indigo-300': $indigo-300,
  'indigo-400': $indigo-400,
  'indigo-500': $indigo-500,
  'indigo-600': $indigo-600,
  'indigo-700': $indigo-700,
  'indigo-800': $indigo-800,
  'indigo-900': $indigo-900,
  'purple-100': $purple-100,
  'purple-200': $purple-200,
  'purple-300': $purple-300,
  'purple-400': $purple-400,
  'purple-500': $purple-500,
  'purple-600': $purple-600,
  'purple-700': $purple-700,
  'purple-800': $purple-800,
  'purple-900': $purple-900,
  'pink-100': $pink-100,
  'pink-200': $pink-200,
  'pink-300': $pink-300,
  'pink-400': $pink-400,
  'pink-500': $pink-500,
  'pink-600': $pink-600,
  'pink-700': $pink-700,
  'pink-800': $pink-800,
  'pink-900': $pink-900,
  'red-100': $red-100,
  'red-200': $red-200,
  'red-300': $red-300,
  'red-400': $red-400,
  'red-500': $red-500,
  'red-600': $red-600,
  'red-700': $red-700,
  'red-800': $red-800,
  'red-900': $red-900,
  'orange-100': $orange-100,
  'orange-200': $orange-200,
  'orange-300': $orange-300,
  'orange-400': $orange-400,
  'orange-500': $orange-500,
  'orange-600': $orange-600,
  'orange-700': $orange-700,
  'orange-800': $orange-800,
  'orange-900': $orange-900,
  'yellow-100': $yellow-100,
  'yellow-200': $yellow-200,
  'yellow-300': $yellow-300,
  'yellow-400': $yellow-400,
  'yellow-500': $yellow-500,
  'yellow-600': $yellow-600,
  'yellow-700': $yellow-700,
  'yellow-800': $yellow-800,
  'yellow-900': $yellow-900,
  'green-100': $green-100,
  'green-200': $green-200,
  'green-300': $green-300,
  'green-400': $green-400,
  'green-500': $green-500,
  'green-600': $green-600,
  'green-700': $green-700,
  'green-800': $green-800,
  'green-900': $green-900,
  'teal-100': $teal-100,
  'teal-200': $teal-200,
  'teal-300': $teal-300,
  'teal-400': $teal-400,
  'teal-500': $teal-500,
  'teal-600': $teal-600,
  'teal-700': $teal-700,
  'teal-800': $teal-800,
  'teal-900': $teal-900,
  'cyan-100': $cyan-100,
  'cyan-200': $cyan-200,
  'cyan-300': $cyan-300,
  'cyan-400': $cyan-400,
  'cyan-500': $cyan-500,
  'cyan-600': $cyan-600,
  'cyan-700': $cyan-700,
  'cyan-800': $cyan-800,
  'cyan-900': $cyan-900
);
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
