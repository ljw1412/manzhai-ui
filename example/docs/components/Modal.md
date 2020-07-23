## Modal 对话框

模态对话框，悬浮于页面，引导用户进行相关操作。

### 基础用法
:::demo `visible/v-model`属性控制对话框的显示隐藏。`divider`属性控制是否使用分割线分隔。不使用`title`属性且不用`title`插槽，将不渲染对话框头部。
```html
<mz-button color="success"
  @click="visible = true">显示对话框</mz-button>
<mz-modal v-model="visible" title="对话框">
  <div>Welcome to chaos world!</div>
  <template #footer>
    <mz-button flat color="primary"
      @click="visible = false">呦吼</mz-button>
  </template>
</mz-modal>

<mz-button color="warning"
  @click="visible2 = true">有分隔线的对话框</mz-button>
<mz-modal v-model="visible2" divider
  title="分隔线效果对话框">
  <div>全てはシュタインズゲートの选択だ</div>
  <template #footer>
    <mz-button flat color="primary"
      @click="visible2 = false">是的</mz-button>
  </template>
</mz-modal>

<mz-button color="danger"
  @click="visible3 = true">显示无头对话框</mz-button>
<mz-modal v-model="visible3">这是无头对话框的内容</mz-modal>

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
      @click="visible = false">哇哦</mz-button>
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

### 嵌套的对话框

对话框内触发内部对话框显示。

:::demo <span style="color:var(--color-danger)">原则上禁止嵌套弹窗，因为这样做可能会导致弹窗和遮罩的层级的关系错误。</span>如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。如果万不得已一定要用，Model 组件提供了`append-to-body`属性，将内层 Model  的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Model 和遮罩层级关系的正确。
```html
<mz-button color="success"
  @click="visible = true">显示对话框</mz-button>

<mz-modal v-model="visible" title="对话框">
  <div>Welcome to chaos world!</div>
  <mz-modal v-model="visible2" append-to-body
    title="嵌套的对话框">
    <div>全てはシュタインズゲートの选択だ</div>
    <template #footer>
      <mz-button flat color="primary"
        @click="visible2 = false">关闭</mz-button>
    </template>
  </mz-modal>
  <template #footer>
    <mz-button flat color="primary"
      @click.stop="visible = false">关闭</mz-button>
    <mz-button flat color="success"
      @click="visible2 = true">显示对话框</mz-button>
  </template>
</mz-modal>

<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false
    }
  }
}
</script>
```
:::

### 关闭拦截
:::demo `before-close`属性可以拦截关闭事件，传入 function(done) 方法，`done`为关闭的方法。你也可以传入 Promise。
```html
<mz-button color="success"
  @click="show">显示对话框</mz-button>

<mz-modal v-model="visible" 
  title="对话框" :before-close="beforeClose">
  <div>Welcome to chaos world!</div>
</mz-modal>

<script>
export default {
  data() {
    return {
      visible: false,
      count: 0
    }
  },

  methods: {
    show(){
      this.count = 0
      this.visible = true
    },

    beforeClose(done) {
      this.count++
      if(this.count < 5){
        this.$snackbar.show({
          content: `还要尝试${5 - this.count}次才会关闭 (*￣︶￣)*`
        })
        return
      }
      this.$snackbar.hide()
      done()
    }
  }
}
</script>
```
:::

### 全屏对话框
:::demo `fullscreen`属性控制对话框是否全屏显示。
```html
<mz-button color="success"
  @click="visible = true">全屏对话框</mz-button>
<mz-modal v-model="visible" title="对话框" fullscreen>
  <div>Welcome to chaos world!</div>
  <template #footer>
    <mz-button flat color="primary"
      @click="visible = false">关闭</mz-button>
  </template>
</mz-modal>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
```
:::

### 禁用点击遮罩关闭
:::demo `close-on-click-mask`属性控制对话框是否允许点击遮罩关闭。
```html
<mz-button color="success"
  @click="visible = true">显示对话框</mz-button>
<mz-modal v-model="visible" title="对话框" :close-on-click-mask="false">
  <div>Welcome to chaos world!</div>
  <template #footer>
    <mz-button flat color="primary"
      @click="visible = false">关闭</mz-button>
  </template>
</mz-modal>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
```
:::

### 更多动画
:::demo `transition`属性控制对话框的过渡动画。默认`mz-zoom`。
```html
<span class="fs-14">动画：</span>
<mz-radio-group v-model="transition"
  class="d-inline-block"
  style="margin:0 10px;">
  <mz-radio value="mz-zoom">mz-zoom</mz-radio>
  <mz-radio value="mz-zoom-in-in">mz-zoom-in-in</mz-radio>
  <mz-radio value="mz-bounce">mz-bounce</mz-radio>
</mz-radio-group>
<mz-button color="success"
  @click="visible = true">显示对话框</mz-button>
<mz-modal v-model="visible" 
  title="对话框"
  :transition="transition">
  <div>Welcome to chaos world!</div>
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
      transition: 'mz-zoom'
    }
  }
}
</script>
```
:::

### 快捷调用

ManZhai 为 Vue.prototype 添加了全局方法 `$modal`方法。
:::demo
```html
<!-- alert -->
<mz-button @click="alert">Alert</mz-button>
<mz-button @click="confirm">Confirm</mz-button>
<mz-button @click="prompt">Prompt</mz-button>
<mz-button @click="promptWithRule">带校验的Prompt</mz-button>

<script>
export default {
  methods: {
    close(message) { 
      this.$snackbar.show({content: message, placement: 'bottom'})
    },
    
    alert() {
      this.$modal.alert('我是内容','Alert 标题', 
      { 
        callback:() => { this.close('Alert关闭成功') }
      })
    },
    
    confirm() {
      this.$modal.confirm({
        title: 'Confirm 标题',
        content: '内容',
        cancel: {callback: () => { this.close('Confirm 取消') }},
        confirm: {callback: () => { this.close('Confirm 确认') }} 
      })
    },

    prompt(){
      this.$modal.prompt({
        title: 'Prompt 标题',
        content:'内容' 
      })
      .then(value=>this.close(`结果：'${value}'`))
    },

    promptWithRule(){
      this.$modal.prompt({
        title: 'Prompt 带校验',
        content:'请输入5个字',
        rules: {
          test:/^.{5,}$/,
          message: '不少于5个字符!'
        } 
      })
      .then(value=>this.close(`结果：'${value}'`))
      .catch(()=>{})
    }
  }
}
</script>

```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|visible/v-modal|是否显示|Boolean|||
|title|标题|String|||
|content|内容|String/VNode|||
|fullscreen|是否全屏|Boolean|||
|elevation|阴影深度|Number||15|
|zIndex|层级|Number|||
|width|宽度|String||'500px'|
|top|对话框距离顶部的高度|String|||
|radius|对话框的圆角大小|String|||
|transition|对话框的显隐动画名称|String||'mz-zoom'|
|header-style|头部样式|String/Object|||
|content-style|内容样式|String/Object|||
|footer-style|底部样式|String/Object|||
|outer-scroll|是否外滚动|Boolean|||
|divider|是否有分割线|Boolean|||
|append-to-body|是否将对话框插入至 body 元素上|Boolean|||
|mask|是否显示遮罩|Boolean||true|
|mask-color|遮罩背景颜色|String|||
|mask-blur|遮罩背景模糊度|String|||
|mask-append-to-body|是否将遮罩插入至 body元素上|Boolean||true|
|close-on-click-mask|是否可以通过点击遮罩关闭对话框|Boolean||true|
|close-on-press-escape|	是否可通过按下 ESC 键关闭对话框|Boolean||true|
|before-close|关闭前的回调|(done)=>void / Promise|||


#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|open|打开的回调||
|opend|打开动画结束时的回调||
|close|关闭的回调||
|closed|关闭动画结束时的回调||

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|header|对话框头部||
| 默认 |对话框内容||
|footer|对话框底部||

#### $modal

包含：
- $modal(ModalConfig): Modal
- $modal.alert(message, title, FooterButton): Promise
- $modal.confirm(ModalConfigWithButton): Promise
- $modal.prompt(PromptModalConfig): Promise

<br/>

<div style="padding-left: 20px; font-size: 14px;">

**FooterButton**

你可以直接传入 `String` 类型或对象。

对象属性如下:

- text \<String> 按钮文案
- color \<String> 背景颜色
- textColor \<String> 文字颜色
- callback \<Function> 点击后的回调

<br/>

**ModalConfig**

- title \<String> 标题
- content \<String|VNode> 内容
- elevation \<Number> 深度 (15)
- width \<String> 宽度 ('500px')
- top \<String> 对话框距离顶部的高度
- radius \<String> 对话框的圆角大小
- transition \<String> 对话框的显隐动画名称 ('mz-zoom')
- outer-scroll \<Boolean> 是否外滚动
- divider \<Boolean> 是否有分割线
- mask \<Boolean> 是否显示遮罩 (true)
- close-on-click-mask \<Boolean> 是否可以通过点击遮罩关闭对话框 (true)
- before-close \<(done)=>void / Promise> 关闭前的回调

<br/>

**ModalConfigWithButton**

继承 *ModalConfig* 所有属性外，还有以下属性。

- cancel \<FooterButton> 取消按钮
  - 默认值: { text: '取消' }
- confirm \<FooterButton> 确定按钮
  - 默认值: { text: '确定', color: 'primary' }

<br/>

**PromptModalConfig**

继承 *ModalConfigWithButton* 所有属性外，还有以下属性。

- defaultValue \<String> 默认值
- rules 输入框文字规则
  - (value: string) => boolean
  - { test: RegExp; message: string }
  - Array< _{test: RegExp; message: string}_ >

</div>