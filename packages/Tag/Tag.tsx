import './Tag.scss'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzIcon from '../Icon/index'
import MzSize from '@/mixins/MzSize'

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
      this.sizeClass,
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
      '--mz-tag__bg-color': this.color,
      '--mz-tag__color': this.textColor
    }
  }

  get closeVnode() {
    if (!this.closable) return null
    const data = {
      class: ['mz-tag__close', 'is-pointer'],
      props: { name: 'md-close-circle' },
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
        <span>{this.$slots.default}</span>
        {this.closeVnode}
      </span>
    )
  }
}
