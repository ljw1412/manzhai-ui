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
  readonly width!: string
  @Prop(String)
  readonly height!: string
  @Prop(String)
  readonly fit!: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

  render(h: CreateElement) {
    const data: Record<string, any> = { class: ['mz-image'] }

    if (this.background) {
      data.style = {
        backgroundImage: `url(${this.src})`,
        width: this.width,
        height: this.height
      }
      if (['contain', 'cover'].includes(this.fit)) {
        data.style.backgroundSize = this.fit
      }
      return <div {...data}>{this.$slots.default}</div>
    } else {
      data.attrs = { src: this.src, width: this.width, height: this.height }
      data.style = { objectFit: this.fit }
      return <img {...data} />
    }
  }
}
</script>

<style lang="scss">
</style>
