import { Component, Vue, Prop } from 'vue-property-decorator'

const SIZE_LIST = ['small', 'medium', 'default', 'large']

@Component
export default class MzSize extends Vue {
  @Prop(String)
  readonly size!: string

  get mzSize() {
    return SIZE_LIST.includes(this.size)
      ? `mz-size--${this.size}`
      : 'mz-size--default'
  }
}
