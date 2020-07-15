<script lang="tsx">
import { CreateElement } from 'vue'
import { Component, Vue, Watch } from 'vue-property-decorator'
import navigate from '../../../options/navigate.json'

@Component
export default class Sidebar extends Vue {
  data = navigate
  visible = false
  isMini = false

  render(h: CreateElement) {
    this.onResize()
    const sidebar = this.renderSideBar()
    if (this.isMini) {
      const drawerData = {
        props: {
          visible: this.visible,
          width: '216px',
          placement: 'left',
          mask: this.isMini,
          contentStyle: { padding: 0 }
        },
        on: { 'visible:change': (val: boolean) => (this.visible = val) }
      }
      return <mz-drawer {...drawerData}>{sidebar}</mz-drawer>
    }

    return sidebar
  }

  mounted() {
    window.addEventListener('resize', this.onResize, false)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize, false)
  }

  renderSideBar() {
    const sidebarData = {
      props: {
        data: this.data,
        autoScroll: true,
        round: 'mini',
        scrollBehavior: 'auto',
        autoScrollOnChange: false
      },
      key: 'sidebar',
      on: {
        'item-click': () => {
          this.visible = false
        }
      }
    }

    return (
      <div id="sidebar" class="flex-shrink-0 px-8 py-10">
        <mz-navigation {...sidebarData}></mz-navigation>
      </div>
    )
  }

  onResize() {
    this.isMini = document.body.offsetWidth < 992
  }

  @Watch('isMini')
  onScreenChange(isMini: boolean) {
    if (isMini) {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
#sidebar {
  box-sizing: border-box;
  width: 216px;
  overflow-y: scroll;
  .mz-list-group + .mz-list-group {
    margin-top: 60px;
  }
}
</style>
