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
