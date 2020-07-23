## Drawer 抽屉

屏幕边缘滑出的浮层面板。

### 基础用法
:::demo `placement`可以控制抽屉弹出的位置。可选值`top`、`bottom`、`left`、`right`。默认值`right`。
```html
<mz-filter-section v-model="placement"
  label="抽屉弹出位置：" label-position="right">
  <mz-filter-section-item v-for="item of placementList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>

<mz-button color="success"
  @click="visible = true">显示抽屉</mz-button>

<mz-drawer v-model="visible"
  title="抽屉！！！"
  :placement="placement"></mz-drawer>

<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'right',
      placementList: ['top', 'bottom', 'left', 'right']
    }
  }
}
</script>
```
:::

### 不同插槽

使用不同的插槽组合抽屉有不同样式处理。

:::demo 布局插槽主要有三个，分别为`title`、`默认`、`footer`。
```html
<span class="fs-14">显示的插槽：</span>
<mz-checkbox-group v-model="displayList"
  class="d-inline-block"
  style="margin:0 10px;">
  <mz-checkbox value="header">头部</mz-checkbox>
  <mz-checkbox value="content">内容</mz-checkbox>
  <mz-checkbox value="footer">底部</mz-checkbox>
</mz-checkbox-group>

<mz-button color="success"
  @click="visible = true">显示抽屉</mz-button>

<mz-drawer v-model="visible"
  :placement="placement">
  <span v-if="isDisplay('header')" slot="title">标题</span>
  <span v-if="isDisplay('content')">内容</span>
  <mz-button-group v-if="isDisplay('footer')" slot="footer" block>
    <mz-button color="danger">删除</mz-button>
    <mz-button color="success"
      @click="visible = false">关闭</mz-button>
  </mz-button-group>
</mz-drawer>

<script>
export default {
  data() {
    return {
      visible: false,
      displayList: ['header', 'content', 'footer']
    }
  },

  methods:{
    isDisplay(name){
      return this.displayList.includes(name)
    }
  }
}
</script>
```
:::



### 带分割线

:::demo `divider`可以控制抽屉是否带有分割线。
```html
<mz-button color="success"
  @click="visible = true">显示抽屉</mz-button>

<mz-drawer v-model="visible"
  divider
  :placement="placement">
  <span slot="title">标题</span>
  <span>内容</span>
  <mz-button-group slot="footer" block>
    <mz-button color="danger">删除</mz-button>
    <mz-button color="success"
      @click="visible = false">关闭</mz-button>
  </mz-button-group>
</mz-drawer>

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

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|visible/v-modal|是否显示|Boolean|||
|title|标题|String|||
|placement|弹出的位置|String|'top' / 'right' / 'bottom' / 'left'||
|width|宽度|String||'512px'|
|height|高度，仅placement为'top','bottom'时有效。|String||'512px'|
|headerStyle|抽屉头部样式|any|||
|contentStyle|抽屉内容样式|any|||
|footerStyle|抽屉底部样式|any|||
|elevation|阴影深度|Number||15|
|zIndex|层级|Number|||
|radius|抽屉的圆角大小，与css写法一致|String|||
|divider|是否有分割线|Boolean|||
|append-to-body|是否将对话框插入至 body 元素上|Boolean|||
|showClose|是否关闭按钮|Boolean||true|
|mask|是否显示遮罩|Boolean||true|
|mask-color|遮罩背景颜色|String|||
|mask-blur|遮罩背景模糊度|String|||
|mask-append-to-body|是否将遮罩插入至 body元素上|Boolean||true|
|close-on-click-mask|是否可以通过点击遮罩关闭抽屉|Boolean||true|
|close-on-press-escape|	是否可通过按下 ESC 键关闭抽屉|Boolean||true|
|before-close|关闭前的回调|(done)=>void / Promise|||

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|title|标题插槽||
|默认|内容插槽||
|footer|底部插槽||