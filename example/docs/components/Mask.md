## Mask 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 基础用法
:::demo `visible`属性控制遮罩的显示和隐藏。
```html
<mz-mask :visible="visible"
  @click="visible = false"></mz-mask>
<mz-button color="success"
  @click="visible = true">普通遮罩</mz-button>

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

### 背景模糊
:::demo `blur`属性控制背景模糊度。
```html
<mz-mask :visible="visible" blur="3px"
  @click="visible = false"></mz-mask>
<mz-button color="success"
  @click="visible = true">带背景模糊的遮罩</mz-button>

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

### 使用指令

引入 Mask 组件后，会自动在 Vue 的 prototype 上挂载 $mask 方法，在所有组件内部都可以直接调用此方法。

它包含`show`和`hide`两个方法。

:::demo 
```html
<mz-button color="success"
  @click="show">显示遮罩</mz-button>

<script>
export default {
  methods: {
    show(){
      this.$mask.show({ onClick: () => this.$mask.hide() })
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
|visible|是否显示|Boolean|||
|blur|背景模糊度|String|||
|transition|动画效果|String||'mz-fade'|
|zIndex|界面层级|Number|||
|appendToBody|是否添加到body元素下|Boolean|||

#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|click|遮罩点击事件|(e: Event)|

#### $mask

包含：
- $mask.show(MaskConfig)
- $mask.hide()

MaskConfig 为 object，具体属性如下：

| 参数 | 说明 | 类型 |默认值|
| --- | --- | --- | --- |
|transition|动画效果|String|'mz-fade'|
|blur|背景模糊度|String||
|zIndex|界面层级|Number||
|onClick|点击事件|function(e)||