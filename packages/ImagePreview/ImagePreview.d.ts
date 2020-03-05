export type ImageItem = { url: string; title?: string; thumbnail?: string }
export type ImagePreviewConfig = {
  thumbnail?: boolean
  playable?: boolean
  actionbar?: boolean
  loop?: boolean
  appendToBody?: boolean
  images: (string | ImageItem)[]
  current?: string
  index?: number
  minZoom?: number
  maxZoom?: number
  zIndex?: number
}

declare module 'vue/types/vue' {
  interface Vue {
    $imagePreview: {
      show: (options: ImagePreviewConfig) => void
      close: () => {}
    }
  }
}
