export class ColorItem {
  name: string
  scssName: string
  hex: string
  label: string
  fontColor: string = 'var(--color-text-primary)'

  constructor(name: string, label: string, fontColor?: string) {
    this.name = name
    this.scssName = name.replace(/^--/, '$')
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
    colorList: [new ColorItem('--color-border-base', '基础色')]
  }
  // {
  //   title: 'MorePrimaryColor',
  //   colorList: [
  //     new ColorItem('--color-primary-1', '亮度1'),
  //     new ColorItem('--color-primary-2', '亮度2'),
  //     new ColorItem('--color-primary-3', '亮度3'),
  //     new ColorItem('--color-primary-4', '亮度4'),
  //     new ColorItem('--color-primary-5', '亮度5'),
  //     new ColorItem('--color-primary-6', '亮度6'),
  //     new ColorItem('--color-primary-7', '亮度7'),
  //     new ColorItem('--color-primary-8', '亮度8'),
  //     new ColorItem('--color-primary-9', '亮度9'),
  //     new ColorItem('--color-primary-10', '亮度10(=--color-primary)'),
  //     new ColorItem('--color-primary-11', '亮度11'),
  //     new ColorItem('--color-primary-12', '亮度12'),
  //     new ColorItem('--color-primary-13', '亮度13'),
  //     new ColorItem('--color-primary-14', '亮度14'),
  //     new ColorItem('--color-primary-15', '亮度15'),
  //     new ColorItem('--color-primary-16', '亮度16'),
  //     new ColorItem('--color-primary-17', '亮度17'),
  //     new ColorItem('--color-primary-18', '亮度18'),
  //     new ColorItem('--color-primary-19', '亮度19')
  //   ]
  // }
]

export default list

export function updateHex() {
  list.forEach(item => {
    item.colorList.forEach(c => {
      c.updateHex()
    })
  })
}
