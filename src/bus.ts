import { Component, Vue, Watch, Emit } from 'vue-property-decorator'
import { changeTheme, getCurrentTheme } from './utils/theme'

@Component
class MzBus extends Vue {
  theme = ''

  @Emit('theme-change')
  @Watch('theme')
  themeChange(val: string) {
    changeTheme(val)
  }

  created() {
    this.theme = getCurrentTheme()
  }

  changeTheme(name: string) {
    this.theme = name
  }
}

export default new MzBus()
