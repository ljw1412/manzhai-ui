import { Component, Model, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import MzPopView from '@/mixins/PopView'

interface ImageItem {
  url: string
  title?: string
  thumbnail?: string
}

const LAYOUT_TYPES = ['zoom', 'play', 'fullscreen', 'download', 'thumbnail']

@Component
export default class MzImagePreview extends MzPopView {
  @Prop({ type: Array, default: () => [] })
  readonly images!: (string | ImageItem)[]
  @Prop({ type: String, default: '' })
  readonly layout!: string
  @Prop({ type: Array, default: () => [0.1, 4] })
  readonly zoom!: number[]

  get layoutState() {
    return LAYOUT_TYPES.reduce((obj: Record<string, boolean>, type) => {
      obj[type] = this.layout.includes(type)
      return obj
    }, {})
  }

  render(h: CreateElement) {
    return (
      <transition name="mz-fade">
        <div class="mz-image-preview"></div>
      </transition>
    )
  }
}
