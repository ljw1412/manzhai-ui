## Tooltip 提示文字

常用于用户使用鼠标与元素交互时，显示的对被交互元素起提示作用的信息。

基于开源项目[`Tippy.js`](**_blank**https://github.com/atomiks/tippyjs)。

### 基础用法
:::demo `content`属性控制显示提示的提示信息。`placement`属性控制显示提示的位置。
```html
<div class="box">
  <div class="top">
    <mz-tooltip placement="top-start" content="top-start 提示文字">
      <mz-button color="primary">top-start</mz-button>
    </mz-tooltip>
    <mz-tooltip placement="top" content="top 提示文字">
      <mz-button color="primary">top</mz-button>
    </mz-tooltip>
    <mz-tooltip placement="top-end" content="top-end 提示文字">
      <mz-button color="primary">top-end</mz-button>
    </mz-tooltip>
  </div>

  <div class="left">
    <mz-tooltip placement="left-start" content="left-start 提示文字">
      <mz-button color="primary">left-start</mz-button>
    </mz-tooltip>
    <mz-tooltip placement="left" content="left 提示文字">
      <mz-button color="primary">left</mz-button>
    </mz-tooltip>
    <mz-tooltip placement="left-end" content="left-end 提示文字">
      <mz-button color="primary">left-end</mz-button>
    </mz-tooltip>
  </div>

  <div class="right">
    <mz-tooltip placement="right-start" content="right-start 提示文字">
      <mz-button color="primary">right-start</mz-button>
    </mz-tooltip>
    <mz-tooltip placement="right" content="right 提示文字">
      <mz-button color="primary">right</mz-button>
    </mz-tooltip>
    <mz-tooltip placement="right-end" content="right-end 提示文字">
      <mz-button color="primary">right-end</mz-button>
    </mz-tooltip>
  </div>

  <div class="bottom">
    <mz-tooltip placement="bottom-start" content="bottom-start 提示文字">
      <mz-button color="primary">bottom-start</mz-button>
    </mz-tooltip>
    <mz-tooltip placement="bottom" content="bottom 提示文字">
      <mz-button color="primary">bottom</mz-button>
    </mz-tooltip>
    <mz-tooltip placement="bottom-end" content="bottom-end 提示文字">
      <mz-button color="primary">bottom-end</mz-button>
    </mz-tooltip>
  </div>
</div>

<style>
.box{
  width: 540px;
}
.top {
  padding-left: 110px;
}
.left {
  float: left;
  width: 100px;
}
.right {
  float: right;
  width: 100px;
}
.bottom {
  clear: both;
  margin: auto;
  padding-left: 110px;
}
.mz-button{
  margin: 5px;
  width: 100px;
  height: 40px;
}
</style>
```
:::

### 触发方式
:::demo `trigger`属性控制触发方式，默认值`hover`，可选值`hover`、`click`、`focus`、`manual`。`hide-on-click`属性控制触发逻辑，`true`:点击外部会隐藏，`false`:点击外部不会隐藏，`'toggle'`:点击自己显示和隐藏。
```html
<mz-tooltip content="鼠标悬停触发" trigger="hover">
  <mz-button color="primary">hover</mz-button>
</mz-tooltip>
<mz-tooltip content="鼠标点击触发" trigger="click">
  <mz-button color="primary">click</mz-button>
</mz-tooltip>
<mz-tooltip content="鼠标聚焦触发" trigger="focus">
  <mz-button color="primary">focus</mz-button>
</mz-tooltip>

<mz-tooltip content="手动触发" trigger="manual"
  :visible="visible" :hide-on-click="false">
  <span color="primary">manual</span>
</mz-tooltip>
<mz-switch v-model="visible"></mz-switch>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style>
.mz-button{
  margin: 5px;
  width: 60px;
}
</style>
```
:::

### 显示箭头
:::demo 设置`arrow`属性控制是否显示箭头，类型`Boolean`、`String`(base64Image)、`SVGElement`。
```html
<mz-tooltip arrow content="带箭头的提示文字">
  <mz-button color="primary">按钮</mz-button>
</mz-tooltip>
```
:::

### 动画效果

另外提供了4类动画效果。您也可以[自定义动画](**_blank**https://atomiks.github.io/tippyjs/v6/animations/#custom-animations)。

:::demo `animation`属性控制动画效果，类型`Boolean / String`，默认值`fade`。
```html
<div>
  <mz-tooltip content="fade 动画效果">
    <mz-button color="primary">fade(默认)</mz-button>
  </mz-tooltip>
</div>

<div>
  <mz-tooltip animation="shift-away" content="shift-away动画效果">
    <mz-button color="primary">shift-away</mz-button>
  </mz-tooltip>
  <mz-tooltip animation="shift-away-subtle" content="shift-away-subtle动画效果">
    <mz-button color="primary">shift-away-subtle</mz-button>
  </mz-tooltip>
  <mz-tooltip animation="shift-away-extreme" content="shift-away-extreme动画效果">
    <mz-button color="primary">shift-away-extreme</mz-button>
  </mz-tooltip>
</div>

<div>
  <mz-tooltip animation="shift-toward" content="shift-toward动画效果">
    <mz-button color="primary">shift-toward</mz-button>
  </mz-tooltip>
  <mz-tooltip animation="shift-toward-subtle" content="shift-toward-subtle动画效果">
    <mz-button color="primary">shift-toward-subtle</mz-button>
  </mz-tooltip>
  <mz-tooltip animation="shift-toward-extreme" content="shift-toward-extreme动画效果">
    <mz-button color="primary">shift-toward-extreme</mz-button>
  </mz-tooltip>
</div>

<div>
  <mz-tooltip animation="scale" content="scale动画效果">
    <mz-button color="primary">scale</mz-button>
  </mz-tooltip>
  <mz-tooltip animation="scale-subtle" content="scale-subtle动画效果">
    <mz-button color="primary">scale-subtle</mz-button>
  </mz-tooltip>
  <mz-tooltip animation="scale-extreme" content="scale-extreme动画效果">
    <mz-button color="primary">scale-extreme</mz-button>
  </mz-tooltip>
</div>

<div>
  <mz-tooltip animation="perspective" content="perspective动画效果">
    <mz-button color="primary">perspective</mz-button>
  </mz-tooltip>
  <mz-tooltip animation="perspective-subtle" content="perspective-subtle动画效果">
    <mz-button color="primary">perspective-subtle</mz-button>
  </mz-tooltip>
  <mz-tooltip animation="perspective-extreme" content="perspective-extreme动画效果">
    <mz-button color="primary">perspective-extreme</mz-button>
  </mz-tooltip>
</div>

<style>
.mz-button{
  margin: 5px;
  width: 160px;
}
</style>
```
:::

### 追随鼠标

:::demo `follow-cursor`属性控制鼠标追随情况。默认值`false`，可选值`true`: 启用、`false`: 禁用、`horizontal`: 水平、`vertical`: 垂直、`initial`: 第一次鼠标触及的位置。
```html
<mz-tooltip follow-cursor content="true">
  <mz-button color="primary">followCursor: true</mz-button>
</mz-tooltip>
<mz-tooltip :follow-cursor="false" content="false">
  <mz-button color="primary">followCursor: false</mz-button>
</mz-tooltip>
<br>
<mz-tooltip follow-cursor="horizontal" content="horizontal">
  <mz-button color="primary">followCursor: horizontal</mz-button>
</mz-tooltip>
<mz-tooltip follow-cursor="vertical" content="vertical">
  <mz-button color="primary">followCursor: vertical</mz-button>
</mz-tooltip>
<mz-tooltip follow-cursor="initial" content="initial">
  <mz-button color="primary">followCursor: initial</mz-button>
</mz-tooltip>

<style>
.mz-button{
  margin: 5px;
  width: 160px;
}
</style>
```
:::

### 与内容交互

:::demo `interactive`属性控制是否允许你进行内容交互。
```html
<mz-tooltip interactive content="你可以对提示文字内容进行交互">
  <mz-button color="primary">interactive</mz-button>
</mz-tooltip>
```
:::

### 位置偏离

:::demo `offset`属性控制位置偏移量，格式是`[skidding, distance]`，这两个值的类型都是`number`，默认值`[0, 10]`。
```html
<mz-tooltip content="提示文字">
  <mz-button color="primary">[0, 10]</mz-button>
</mz-tooltip>

<mz-tooltip :offset="[20, 5]" content="提示文字">
  <mz-button color="primary">[20, 5]</mz-button>
</mz-tooltip>

<mz-tooltip :offset="[10, 20]" content="提示文字">
  <mz-button color="primary">[10, 20]</mz-button>
</mz-tooltip>

<style>
.mz-button{
  margin: 5px;
  width: 100px;
}
</style>
```
:::

### 主题

默认提供了5种主题样式，您也可以[自定义主题样式](**_blank**https://atomiks.github.io/tippyjs/v6/themes/#creating-a-theme)。

:::demo
```html
<mz-tooltip content="默认主题">
  <mz-button color="primary">默认主题</mz-button>
</mz-tooltip>

<mz-tooltip content="light" theme="light">
  <mz-button color="primary">light</mz-button>
</mz-tooltip>

<mz-tooltip content="light-border" theme="light-border">
  <mz-button color="primary">light-border</mz-button>
</mz-tooltip>

<mz-tooltip content="material" theme="material">
  <mz-button color="primary">material</mz-button>
</mz-tooltip>

<mz-tooltip content="translucent" theme="translucent">
  <mz-button color="primary">translucent</mz-button>
</mz-tooltip>

<style>
.mz-button{
  margin: 5px;
  width: 90px;
}
</style>
```
:::

### 自定义内容
::: demo
```html
<mz-tooltip>
  <mz-button color="primary">自定义内容</mz-button>
  <div slot="content" style="width:160px;text-align:center">
    <h2>Tooltip</h2>
    <p>欢迎使用tooltip!</p>
    <p>L('ω')┘三└('ω')｣</p>
  </div>
</mz-tooltip>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|visible/v-model|当前显示状态|Boolean|||
|placement|位置|String|top / top-start / top-end / right / right-start / right-end / bottom / bottom-start / bottom-end / left / left-start / left-end / auto / auto-start / auto-end|'top'|
|animation|过渡动画的名称|String|shift-away / shift-away-subtle / shift-away-extreme / shift-toward / shift-toward-subtle / shift-toward-extreme / scale / scale-subtle / scale-extreme / perspective / perspective-subtle / perspective-extreme|'fade'|
|arrow|是否显示箭头或箭头的样式|Boolean / String / SVGElement||false|
|content|提示文字|String|||
|follow-cursor|跟随鼠标|Boolean / String|horizontal / vertical / initial|false|
|interactive|提示信息是否允许互动|Boolean||false|
|maxWidth|最大宽度|Number / String|'none'|350|
|offset|偏移|Array|[skidding, distance]|[0, 10]|
|appendTo|添加至父级|String / Element|'parent' / `(CSS selector)` |document.body|
|theme|主题|String|reverse / same / light / light-border / material / translucent|'reverse'|
|trigger|触发方式|String|'hover' | 'click' | 'focus' | 'manual'|'hover'|
|hideOnClick|点击触发是否隐藏|Boolean / String|'toggle'|true|
|zIndex|同原生层级|Number|||

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|提示文字的引用元素||
|content|提示文字的内容||

#### 事件
*instance* 指 tippy 的实例。
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|visible-change|显示状态变化|(visible:boolean)|
|create|提示气泡创建事件|(instance)|
|mount|提示气泡装载事件|(instance)|
|destroy|提示气泡销毁事件|(instance)|
|show|显示事件|(instance)|
|shown|显示后事件|(instance)|
|hide|隐藏事件|(instance)|
|hidden|隐藏后事件|(instance)|
|trigger|触发事件|(instance)|
|untrigger|反触发事件|(instance)|