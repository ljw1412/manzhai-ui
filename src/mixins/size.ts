import { Component, Vue, Prop } from 'vue-property-decorator'

const sizeList = ['large', 'small']

@Component
export default class SizeMixin extends Vue {
  @Prop(String)
  readonly size!: string

  mzSizeClass(
    prefix: string,
    size: string,
    classes?: (string | Record<string, boolean>)[]
  ) {
    let classname = ''
    if (size && sizeList.includes(size)) {
      classname = `${prefix}--${size}`
      if (classes) classes.push(classname)
    }
    return classname
  }
}
