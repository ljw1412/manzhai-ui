<template>
  <div v-show="!hidden"
    v-ripple="!itemDisabled && ripple"
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
import { MzList } from '.'

@Component
export default class MzListItem extends Vue {
  @Inject({ from: 'mzList', default: null })
  readonly mzList!: MzList
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
  @Prop({ type: [Boolean, Object], default: true })
  readonly ripple!: boolean | object
  @Prop(String)
  readonly size!: string

  mActive = false
  hidden = false

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
    if (this.mzList) {
      this.mzList.itemList.push(this)
      if (this.mzList.value === this.value) {
        this.mActive = true
      }
    }
  }

  beforeDestroy() {
    if (this.mzList) this.mzList.itemList.remove(this)
  }
}
</script>
