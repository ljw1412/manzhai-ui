import { Component, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzIcon from '../Icon/Icon.vue'
import MzSize from 'manzhai-ui/src/mixins/MzSize'

@Component({ components: { MzIcon } })
export default class MzTag extends MzSize {
  @Prop(String)
  readonly color!: string
  @Prop(String)
  readonly textColor!: string
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

  get styles() {
    return {
      borderColor: this.color,
      backgroundColor: this.outlined || this.text ? '' : this.color,
      color: this.outlined || this.text ? this.color : this.textColor
    }
  }

  get closeVnode() {
    if (!this.closable) return null
    const data = {
      class: ['mz-tag__close', 'is-pointer'],
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
      style: [this.styles],
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
