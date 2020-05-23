import { Component, Prop, PropSync, Watch } from 'vue-property-decorator'
import { CreateElement, VNodeData } from 'vue'
import { fullScreen } from '@/utils/assist'
import MouseDrag from '@/classes/MouseDrag'
import MzPopView from '@/mixins/PopView'
import MzProgress from '@packages/Progress/Progress.vue'
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
  disabled?: boolean
}

const LAYOUT_TYPES = ['zoom', 'play', 'fullscreen', 'download', 'thumbnail']

@Component({ components: { MzButton, MzIcon, MzImage, MzProgress } })
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
  indexSync!: number
  @Prop({ type: Boolean, default: false })
  readonly closeOnClickMask!: boolean

  mIndex = 0
  scale = 1
  timeCount = 0
  playing = false
  fullscreen = false
  thumbnail = false
  heightPriority = false
  mouseDrag = new MouseDrag(0, 0, 0, true)
  playTimer: number | null = null

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

  get currentImage() {
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
        icon: 'remove-circle-outline',
        name: 'zoom-out',
        display: this.layoutState.zoom,
        disabled: this.scale <= this.zoom[0]
      },
      {
        title: '放大',
        icon: 'add-circle-outline',
        name: 'zoom-in',
        display: this.layoutState.zoom,
        disabled: this.scale >= this.zoom[1]
      },
      {
        title: '全屏',
        icon: 'expand',
        name: 'maximize',
        display: this.layoutState.fullscreen && !this.fullscreen
      },
      {
        title: '还原屏幕',
        icon: 'contract',
        name: 'unmaximize',
        display: this.layoutState.fullscreen && this.fullscreen
      },

      {
        title: '播放',
        icon: 'play',
        name: 'play',
        display: this.layoutState.play && !this.playing
      },
      {
        title: '暂停',
        icon: 'pause',
        name: 'pause',
        display: this.layoutState.play && this.playing
      },
      {
        title: '下载',
        icon: 'download',
        name: 'download',
        display: this.layoutState.download
      },
      { title: '关闭', icon: 'close', name: 'close', display: true }
    ].filter(item => item.display)
  }

  get arrows() {
    return [
      {
        title: '上一页',
        icon: 'arrow-back',
        name: 'previous',
        display: true
      },
      {
        title: '下一页',
        name: 'next',
        icon: 'arrow-forward',
        display: true
      }
    ]
  }

  renderProgress() {
    if (!this.layoutState.play) return null
    const data = {
      props: { value: this.timeCount },
      directives: [{ name: 'show', value: this.playing }]
    }
    return <mz-progress {...data}></mz-progress>
  }

  renderActionBtn({ icon, title, name, disabled }: ActionItem) {
    return (
      <mz-tooltip
        key={name}
        content={title}
        offset={[0, 5]}
        followCursor="horizontal">
        <mz-button
          flat={true}
          disabled={disabled}
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
    const data = {
      class: [
        'mz-image-preview-image',
        { 'height-first': this.heightPriority }
      ],
      key: this.currentImage.url,
      style: {
        transform: `translate(${this.mouseDrag.x}px,${this.mouseDrag.y}px) scale(${this.scale})`
      }
    }

    return (
      <main on-mousedown={(e: MouseEvent) => this.mouseDrag.start(e)}>
        <transition name="mz-fade">
          <div {...data}>
            <img
              draggable="false"
              src={this.currentImage.url}
              on-load={this.handleImageLoad}
            />
          </div>
        </transition>
      </main>
    )
  }

  readerFooter() {
    if (!this.layoutState.thumbnail) return
    return (
      <footer class={{ 'hide-thumbnail': !this.thumbnail }}>
        <div class="mz-image-preview-title-wrp">
          {this.renderActionBtn({
            icon: 'images',
            title: '缩略图',
            name: 'thumbnail'
          })}
          <div class="mz-image-preview-title">{this.currentImage.title}</div>
        </div>
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

  renderArrows() {
    return this.arrows.map(item => this.renderActionBtn(item))
  }

  render(h: CreateElement) {
    const data: VNodeData = {
      class: ['mz-image-preview', { 'is-dragging': this.mouseDrag.moving }],
      style: { zIndex: this.mZIndex }
    }
    return (
      <transition name="mz-fade">
        <div v-show={this.visible} {...data}>
          {this.renderProgress()}
          {this.renderArrows()}
          {this.renderHeader()}
          {this.readerContent()}
          {this.readerFooter()}
        </div>
      </transition>
    )
  }

  zoomImage(offset: number) {
    this.scale = Math.max(
      Math.min(this.scale + offset, this.zoom[1]),
      this.zoom[0]
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
      case 'zoom-in':
        this.zoomImage(0.1)
        break
      case 'zoom-out':
        this.zoomImage(-0.1)
        break
      case 'maximize':
        fullScreen(true)
        this.fullscreen = true
        break
      case 'unmaximize':
        fullScreen(false)
        this.fullscreen = false
        break
      case 'play':
        this.playing = true
        break
      case 'pause':
        this.playing = false
        break
      case 'previous':
        this.mIndex = this.indexSync = (this.mIndex + 1) % this.mImages.length
        break
      case 'next':
        this.mIndex = this.indexSync =
          (this.mIndex - 1 + this.mImages.length) % this.mImages.length
        break
    }
  }

  handleImageLoad(e: Event) {
    const img = e.target as HTMLImageElement
    // 当高宽比小于2时，让图片在页面中完全展示
    this.heightPriority = img.naturalHeight / img.naturalWidth < 2
  }

  clearPlayTimer() {
    this.playTimer && clearInterval(this.playTimer)
    this.timeCount = 0
    this.playing = false
  }

  @Watch('visible')
  onImagePreviewVisible(visible: boolean) {
    if (visible) {
      this.mouseDrag.reset()
      this.mIndex = this.indexSync
      this.thumbnail = this.layoutState.thumbnail
      this.scale = 1
    } else {
      this.clearPlayTimer()
    }
  }

  @Watch('mIndex')
  onIndexChange(index: number) {
    this.mouseDrag.reset()
    this.scale = 1
  }

  @Watch('playing')
  onPlayChange(isPlay: boolean) {
    if (isPlay) {
      this.playTimer = setInterval(() => {
        if (this.timeCount === 100) {
          this.timeCount = 0
          this.action('next')
        }
        this.timeCount++
      }, 100)
    } else {
      this.clearPlayTimer()
    }
  }
}
