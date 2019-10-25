<template>
  <div v-ripple="!itemDisabled && ripple"
    class="mz-list-item color-transition"
    :class="itemClasses"
    :style="itemStyles"
    @click="onClick">
    <div v-if="$slots.prefix"
      class="mz-list-item__prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="mz-list-item__content">
      <slot name="content">
        <div class="mz-list-item__title">
          <slot name="title">{{ label || value }}</slot>
        </div>
        <div v-if="text || $slots.text"
          class="mz-list-item__text">
          <slot name="text">{{ text }}</slot>
        </div>
      </slot>
    </div>
    <div v-if="$slots.suffix"
      class="mz-list-item__suffix flex-double-center">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Watch } from 'vue-property-decorator'

@Component
export default class MzListItem extends Vue {
  @Inject({ from: 'mzList', default: null })
  readonly mzList!: any
  @Prop()
  readonly data!: any
  @Prop(String)
  readonly label!: string
  @Prop({ required: true })
  readonly value!: string
  @Prop(String)
  readonly text!: string
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(Boolean)
  readonly active?: boolean
  @Prop(Boolean)
  readonly link!: boolean
  @Prop(Boolean)
  readonly notAllowSelected!: boolean
  @Prop([Boolean, String])
  readonly round!: boolean | 'left' | 'right' | 'mini'
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object
  @Prop(String)
  readonly size!: string

  mActive = false

  get itemDisabled() {
    if (this.mzList && this.mzList.disabled) return true
    return this.disabled
  }

  get itemSize() {
    if (this.mzList && this.mzList.size) return this.mzList.size
    return this.size
  }

  get gutter() {
    if (this.mzList && this.mzList.gutter) return this.mzList.gutter
    return undefined
  }

  get itemActive() {
    return this.active || this.mActive
  }

  get itemStyles() {
    return { marginTop: this.gutter }
  }

  get itemClasses() {
    const classes = []
    if (
      typeof this.round === 'string' &&
      ['left', 'right', 'mini'].includes(this.round)
    ) {
      classes.push(`mz-list-item--${this.round}-round`)
    }
    if (['large', 'small'].includes(this.itemSize)) {
      classes.push(`mz-list-item--${this.itemSize}`)
    }
    return [
      classes,
      {
        'mz-list-item--disabled': this.itemDisabled,
        'mz-list-item--active': this.itemActive,
        'mz-list-item--link': this.link || this.ripple,
        'mz-list-item--round': typeof this.round === 'boolean' && this.round
      }
    ]
  }

  @Watch('active', { immediate: true })
  onActiveChange(active: boolean) {
    this.mActive = !!active
  }

  onClick() {
    if (this.itemDisabled) return
    this.$emit('click', this.value, this.data)
    if (this.mzList && !this.notAllowSelected) {
      this.mzList.setValue(this.value, this.data, this)
    }
  }

  created() {
    if (this.mzList) this.mzList.addItem(this)
  }

  beforeDestroy() {
    if (this.mzList) this.mzList.removeItem(this)
  }
}
</script>

<style lang="scss">
@import '@/styles/common/index.scss';
.mz-list-item {
  --mz-list-item__font-color--active: var(--color-primary);
  position: relative;
  display: flex;
  padding: 0 16px;
  @include mzColorVar(--color-text-regular);
  &__content {
    flex-grow: 1;
    position: relative;
    padding: 12px 0;
    z-index: 50;
  }

  &__title {
    font-size: 16px;
    @include mzColorVar(--color-text-regular);
  }

  &__text {
    margin-top: 3px;
    font-size: 14px;
    @include mzColorVar(--color-text-secondary);
  }

  &__prefix,
  &__suffix {
    position: relative;
    flex-shrink: 0;
    margin: auto;
  }

  &--link {
    cursor: pointer;
    @include before-background;
  }

  @each $type, $radius in ('', 100px), ('left-', 100px 0 0 100px),
    ('right-', 0 100px 100px 0), ('mini-', 5px)
  {
    &--#{$type}round {
      overflow: hidden;
      border-radius: $radius;
      &::before {
        border-radius: $radius;
      }
    }
  }

  &--disabled {
    cursor: not-allowed;
    .mz-list-item {
      &__title,
      &__text {
        font-weight: bold;
        @include mzColorVar(--color-text-placeholder);
      }
      &:not(.mz-list-item--active) {
        @include before-background-disabled;
      }
    }
  }

  &--active.mz-list-item--link {
    @include before-background-active;
    @include mzColorVar(--mz-list-item__font-color--active);
    .mz-list-item__title {
      @include mzColorVar(--mz-list-item__font-color--active);
    }
  }

  &--large {
    padding: 0 20px;
    .mz-list-item {
      &__content {
        padding: 16px 0;
      }
      &__title {
        font-size: 18px;
      }
      &__text {
        font-size: 16px;
      }
    }
  }

  &--small {
    padding: 0 12px;
    .mz-list-item {
      &__content {
        padding: 8px 0;
      }
      &__title {
        font-size: 14px;
      }
      &__text {
        font-size: 12px;
      }
    }
  }
}
</style>
