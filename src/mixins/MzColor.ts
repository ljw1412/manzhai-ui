import { Component, Vue, Prop } from 'vue-property-decorator'
import { getPresetColorClass } from 'manzhai-ui/src/utils/theme'

@Component
export default class MzColor extends Vue {
  // 背景颜色
  @Prop(String) readonly color!: string
  // 文本颜色
  @Prop(String) readonly textColor!: string
  // 边框颜色
  @Prop(String) readonly borderColor!: string

  // 用于class
  get mColorClass() {
    return {
      bg: getPresetColorClass(this.color, 'bg'),
      text: getPresetColorClass(this.textColor, 'text'),
      border: getPresetColorClass(this.borderColor, 'border')
    }
  }

  // 用于style
  get mColor() {
    return {
      bg: this.mColorClass.bg ? null : this.color,
      text: this.mColorClass.text ? null : this.textColor,
      border: this.mColorClass.border ? null : this.borderColor
    }
  }
}
