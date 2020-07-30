import { Component, Prop, Mixins } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzIcon from '../Icon/Icon.vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'
import MzColor from 'manzhai-ui/src/mixins/MzColor'

@Component({ components: { MzIcon } })
export default class MzTag extends Mixins(MzSize, MzColor) {
  @Prop(Boolean)
  readonly closable!: boolean
  @Prop(Boolean)
  readonly outlined!: boolean
  @Prop([Boolean, String])
  readonly round!: boolean | string
  @Prop(Boolean)
  readonly text!: boolean

  get classes() {
    return [
      'mz-tag',
      this.mzSize,
      Object.values(this.mColorClass),
      {
        'mz-tag--closable': this.closable,
        'mz-tag--outlined': this.outlined,
        'mz-tag--round': this.round,
        'mz-tag--left-round': this.round === 'left',
        'mz-tag--right-round': this.round === 'right',
        'mz-tag--text': this.text
      }
    ]
  }

  get closeVnode() {
    if (!this.closable) return null
    const data = {
      class: ['mz-tag__close'],
      props: { name: 'close-circle-outline' },
      on: {
        click: () => {
          this.$emit('close')
        }
      }
    }

    return <mz-icon {...data}></mz-icon>
  }

  render(h: CreateElement) {
    const data = {
      class: this.classes,
      style: {
        borderColor: this.mColor.border || this.mColor.bg,
        backgroundColor: this.outlined || this.text ? '' : this.mColor.bg,
        color:
          this.mColor.text ||
          (this.outlined || this.text ? this.mColor.bg : undefined)
      },
      on: {
        click: (event: MouseEvent) => this.$emit('click', event)
      }
    }
    return (
      <span {...data}>
        {this.$slots.prefix}
        <span class="mz-tag__content">{this.$slots.default}</span>
        {this.$slots.suffix}
        {this.closeVnode}
      </span>
    )
  }
}
