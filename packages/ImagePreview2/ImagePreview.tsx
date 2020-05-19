import { Component, Prop, PropSync, Watch } from 'vue-property-decorator'
import { CreateElement, VNodeData } from 'vue'
import MzPopView from '@/mixins/PopView'
import MzButton from '@packages/Button/Button'
import MzIcon from '@packages/Icon/Icon.vue'
import MzImage from '@packages/Image/Image.vue'

interface ImageItem {
  url: string
  title?: string
  thumbnail?: string
}

interface ActionItem {
  title: string
  icon: string
  name: string
  display?: boolean
}

const LAYOUT_TYPES = ['zoom', 'play', 'fullscreen', 'download', 'thumbnail']

@Component({ components: { MzButton, MzIcon, MzImage } })
export default class MzImagePreview extends MzPopView {
  @Prop({ type: Array, default: () => [] })
  readonly images!: (string | ImageItem)[]
  @Prop({ type: String, default: '' })
  readonly layout!: string
  @Prop({ type: Array, default: () => [0.1, 4] })
  readonly zoom!: number[]
  @Prop({ type: String, default: '#000' })
  readonly maskColor!: string
  @PropSync('index', { type: Number, default: 0 })
  readonly indexSync!: number

  mIndex = 0
  playing = false
  fullscreen = false
  thumbnail = false

  get mImages(): ImageItem[] {
    return this.images
      .map(image => {
        if (typeof image === 'string') {
          return { url: image }
        } else if (typeof image === 'object' && image.url) {
          return image
        }
        return { url: '' }
      })
      .filter(image => !!image.url)
  }

  getCurrentImage() {
    return this.mImages[this.mIndex] || {}
  }

  get countText() {
    return `${this.mIndex + 1} / ${this.mImages.length}`
  }

  get layoutState() {
    return LAYOUT_TYPES.reduce((obj: Record<string, boolean>, type) => {
      obj[type] = this.layout.includes(type)
      return obj
    }, {})
  }

  get actions() {
    return [
      {
        title: '缩小',
        icon: 'md-remove-circle-outline',
        name: 'zoom-in',
        display: this.layoutState.zoom
      },
      {
        title: '放大',
        icon: 'md-add-circle-outline',
        name: 'zoon-out',
        display: this.layoutState.zoom
      },
      {
        title: '全屏',
        icon: 'md-expand',
        name: 'maximize',
        display: this.layoutState.fullscreen && !this.fullscreen
      },
      {
        title: '还原屏幕',
        icon: 'md-contract',
        name: 'unmaximize',
        display: this.layoutState.fullscreen && this.fullscreen
      },

      {
        title: '播放',
        icon: 'md-play',
        name: 'play',
        display: this.layoutState.play && !this.playing
      },
      {
        title: '暂停',
        icon: 'md-pause',
        name: 'pause',
        display: this.layoutState.play && this.playing
      },
      {
        title: '下载',
        icon: 'md-download',
        name: 'download',
        display: this.layoutState.download
      },
      { title: '关闭', icon: 'md-close', name: 'close', display: true }
    ].filter(item => item.display)
  }

  renderActionBtn({ icon, title, name }: ActionItem) {
    return (
      <mz-tooltip
        key={name}
        content={title}
        offset={[0, 5]}
        followCursor="horizontal">
        <mz-button
          class={`mz-image-preview-button mz-image-preview-button--${name}`}
          on-click={() => this.action(name)}>
          <mz-icon name={icon}></mz-icon>
        </mz-button>
      </mz-tooltip>
    )
  }

  renderHeader() {
    return (
      <header>
        <div class="mz-image-preview-counter">{this.countText}</div>
        <div class="mz-image-preview-action">
          {this.actions.map(item => this.renderActionBtn(item))}
        </div>
      </header>
    )
  }

  readerContent() {
    return <main></main>
  }

  readerFooter() {
    if (!this.layoutState.thumbnail) return
    return (
      <footer class={{ 'hide-thumbnail': !this.thumbnail }}>
        {this.renderActionBtn({
          icon: 'md-images',
          title: '缩略图',
          name: 'thumbnail'
        })}
        <div class="mz-image-preview-thumbnails">
          {this.mImages.map((image, index) => {
            const data = {
              class: [
                'mz-image-preview-thumbnail-wrp',
                { selected: index === this.mIndex }
              ],
              on: {
                click: () => {
                  this.mIndex = index
                }
              }
            }
            return (
              <div {...data}>
                <mz-image
                  fit="cover"
                  class="mz-image-preview-thumbnail"
                  src={image.thumbnail || image.url}></mz-image>
              </div>
            )
          })}
        </div>
      </footer>
    )
  }

  render(h: CreateElement) {
    const data: VNodeData = {
      class: {},
      style: { zIndex: this.mZIndex },
      directives: [{ name: 'show', value: this.visible }]
    }
    return (
      <transition name="mz-fade">
        <div class="mz-image-preview" {...data}>
          {this.renderHeader()}
          {this.readerContent()}
          {this.readerFooter()}
        </div>
      </transition>
    )
  }

  action(name: string) {
    switch (name) {
      case 'close':
        this.close()
        break
      case 'thumbnail':
        this.thumbnail = !this.thumbnail
        break
    }
  }

  @Watch('visible')
  onImagePreviewVisible(visible: boolean) {
    if (visible) {
      this.mIndex = this.indexSync
      this.thumbnail = this.layoutState.thumbnail
    }
  }
}
