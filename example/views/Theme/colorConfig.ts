export class ColorItem {
  name: string
  hex: string
  label: string
  fontColor: string = 'var(--color-text-primary)'

  constructor(name: string, label: string, fontColor?: string) {
    this.name = name
    this.label = label
    this.hex = this.getHex(name)
    if (fontColor) this.fontColor = fontColor
  }

  getHex(name: string = this.name) {
    const root = getComputedStyle(document.documentElement)
    return root.getPropertyValue(name).trim()
  }

  updateHex() {
    this.hex = this.getHex()
  }
}

const list = [
  {
    title: 'Color',
    colorList: [
      new ColorItem('--color-primary', '主题色'),
      new ColorItem('--color-success', '成功色'),
      new ColorItem('--color-warning', '警告色'),
      new ColorItem('--color-danger', '危险色')
    ]
  },
  {
    title: 'FontColor',
    colorList: [
      new ColorItem('--color-text-primary', '主色'),
      new ColorItem('--color-text-regular', '常规色'),
      new ColorItem('--color-text-secondary', '二级色'),
      new ColorItem('--color-text-placeholder', '占位色')
    ]
  },
  {
    title: 'BorderColor',
    colorList: [
      new ColorItem('--color-border-base', '基础色'),
      new ColorItem('--color-border-light', '亮色'),
      new ColorItem('--color-border-lighter', '较亮色'),
      new ColorItem('--color-border-extra-light', '更亮色')
    ]
  }
]

export default list

export function updateHex() {
  list.forEach(item => {
    item.colorList.forEach(c => {
      c.updateHex()
    })
  })
}
