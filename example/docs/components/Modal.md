## Modal 对话框

模态对话框，悬浮于页面，引导用户进行相关操作。

### 基础用法
:::demo `visible/v-model`属性控制对话框的显示隐藏。`divider`属性控制是否使用分割线分隔。`headless`属性控制是否不渲染对话框头部。
```html
<mz-button color="success"
  @click="visible = true">显示对话框</mz-button>
<mz-modal v-model="visible" title="对话框">
  <div>Welcome to chaos world!</div>
  <template #footer>
    <mz-button flat color="primary"
      @click="visible = false">关闭</mz-button>
  </template>
</mz-modal>

<mz-button color="warning"
  @click="visible2 = true">有分隔线的对话框</mz-button>
<mz-modal v-model="visible2" divider
  title="分隔线效果对话框">
  <div>全てはシュタインズゲートの选択だ</div>
  <template #footer>
    <mz-button flat color="primary"
      @click="visible2 = false">关闭</mz-button>
  </template>
</mz-modal>

<mz-button color="danger"
  @click="visible3 = true">显示无头对话框</mz-button>
<mz-modal v-model="visible3" headless>这是无头对话框的内容</mz-modal>

<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false
    }
  }
}
</script>
```
:::


### 内外滚动

提供了两种滚动条效果。

:::demo `outer-scroll`属性控制是否使用外部滚动条。
```html
<mz-button color="success"
  @click="show(false)">内滚动对话框</mz-button>
<mz-button color="warning"
  @click="show(true)">外滚动对话框</mz-button>
<mz-modal v-model="visible" 
  :title="title"
  :outer-scroll="outerScroll">
  <div v-for="i of 100">Welcome to chaos world!</div>
  <template #footer>
    <mz-button flat color="primary"
      @click="visible = false">关闭</mz-button>
  </template>
</mz-modal>

<script>
export default {
  data() {
    return {
      visible: false,
      outerScroll: false
    }
  },

  computed: {
    title() {
      return this.outerScroll ? '外滚动对话框' : '内滚动对话框'
    }
  },

  methods: {
    show(outerScroll = false){
      this.outerScroll = outerScroll
      this.visible = true
    }
  }
}
</script>
```
:::