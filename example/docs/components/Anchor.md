## Anchor 锚点

用于布置锚点指定位置。

### 基本用法

基础锚点的用法。

:::demo `level`属性来控制标题大小，默认为`3`。
```html
<div>
  <mz-anchor href="#a-anchor-1" />
  <span id="a-anchor-1">锚点-1</span>
</div>
```
:::

### 隐蔽式锚点

不可见的锚点。

:::demo `invisible`属性来控制锚点的可见性。
```html
<mz-anchor href="#anchor-invisible" title="不可见锚点-1" invisible></mz-anchor>
```
:::

### 与目录联动

配合 [目录(Catalogue)组件](catalogue) 使用效果更好。

:::demo 将 catalogue 设置 `target`(自动匹配的锚点class名称)，与 anchor 设置 `class`保持一致。这样可以避免锚点出现互串的情况。anchor 的`title`属性值，会作为目录元素的标题。
```html
<mz-row>
  <mz-col :span="12" 
    id="demo-anchor-scroll-container" 
    style="height: 300px; overflow-y: auto;">
    <div class="height-400">
      <mz-anchor href="#anchor-1" class="demo-anchor" title="不可见锚点-1" invisible></mz-anchor>
      <span id="anchor-1">我是不可见锚点</span>
    </div>
    <div class="height-400">    
      <mz-anchor href="#anchor-2" class="demo-anchor" title="锚点-2"></mz-anchor> 
      <span id="anchor-2">锚点-2</span>
    </div>
    <div class="height-400">    
      <mz-anchor href="#anchor-3" class="demo-anchor" title="锚点-3"></mz-anchor> 
      <span id="anchor-3">锚点-3</span>
    </div>
    <div class="height-400">    
      <mz-anchor href="#anchor-4" class="demo-anchor" title="锚点-4"></mz-anchor> 
      <span id="anchor-4">锚点-4</span>
    </div>
    <div class="height-400">    
      <mz-anchor href="#anchor-5" class="demo-anchor" title="锚点-5"></mz-anchor> 
      <span id="anchor-5">锚点-5</span>
    </div>
  </mz-col>

  <mz-col :span="12">
    <mz-catalogue container="#demo-anchor-scroll-container"  
      target=".demo-anchor"></mz-catalogue>
  </mz-col>
</mz-row>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|href|(必填)锚点id名称，匹配规则：/^#[a-zA-Z0-9-_]+$/|String|||
|title|标题|String|||
|level|层级|Number|1-9|3|
|invisible|是否可见|Boolean|||
|symbol|标题前的锚点符号|String||¶|
|scroll-smooth|是否使用js滚动|Boolean|||
