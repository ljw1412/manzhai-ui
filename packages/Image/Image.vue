<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class MzImage extends Vue {
  @Prop(Boolean)
  readonly background!: boolean
  @Prop(String)
  readonly src!: string
  @Prop(String)
  readonly errorSrc!: string
  @Prop(String)
  readonly width!: string
  @Prop(String)
  readonly height!: string
  @Prop(String)
  readonly fit!: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  @Prop({ type: String, default: 'center' })
  readonly position!: string
  @Prop(String)
  readonly alt!: string
  @Prop(String)
  readonly referrerPolicy!: string

  naturalWidth: string = ''
  naturalHeight: string = ''
  preImageSrc: string = ''
  error = false

  get mWidth() {
    return this.background ? this.width || this.naturalWidth : this.width
  }

  get mHeight() {
    return this.background ? this.height || this.naturalHeight : this.height
  }

  get imageUrl() {
    return this.error ? this.errorSrc : this.src
  }

  render(h: CreateElement) {
    const data: Record<string, any> = { class: ['mz-image', {}] }
    if (this.error && !this.errorSrc && this.$slots.error) {
      return this.renderError(data)
    }

    return this.background
      ? this.renderBackground(data)
      : this.renderImage(data)
  }

  initBackgroundSize() {
    if (this.src && this.src !== this.preImageSrc) {
      const image = new Image()
      image.src = this.src
      image.onload = e => {
        this.preImageSrc = this.src
        if (!this.width) {
          this.naturalWidth = image.naturalWidth + 'px'
        }
        if (!this.height) {
          this.naturalHeight = image.naturalHeight + 'px'
        }
        this.onLoad(e)
      }
      image.onerror = this.onError
    }
  }

  renderBackground(data: Record<string, any>) {
    this.initBackgroundSize()
    data.style = {
      backgroundImage: `url(${this.imageUrl})`,
      backgroundPosition: this.position,
      width: this.mWidth,
      height: this.mHeight
    }
    if (['contain', 'cover'].includes(this.fit)) {
      data.style.backgroundSize = this.fit
    }
    return <div {...data}>{this.$slots.default}</div>
  }

  renderImage(data: Record<string, any>) {
    Object.assign(data, {
      style: { objectFit: this.fit, objectPosition: this.position },
      attrs: {
        src: this.imageUrl,
        width: this.mWidth,
        height: this.mHeight,
        alt: this.alt,
        referrerPolicy: this.referrerPolicy
      },
      on: {
        load: this.onLoad,
        error: this.onError
      }
    })
    return <img {...data} />
  }

  renderError(data: Record<string, any>) {
    Object.assign(data, {
      class: ['mz-image', 'mz-image--error'],
      style: { width: this.mWidth, height: this.mHeight }
    })
    return <div {...data}>{this.$slots.error}</div>
  }

  onLoad(e: Event) {
    this.$emit('load', ...arguments)
  }

  onError(e: Event | string) {
    this.error = true
    this.$emit('error', ...arguments)
  }
}
</script>
