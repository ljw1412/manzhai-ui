## Anchor 锚点

用于布置锚点指定位置。

### 基本用法

基础锚点的用法。

:::demo `level`属性来控制标题大小，默认为`3`。
```html
<mz-anchor name="a-anchor-1" title="锚点-1" :level="1"></mz-anchor>
<mz-anchor name="a-anchor-2" title="锚点-2" :level="2"></mz-anchor>
<mz-anchor name="a-anchor-3" title="锚点-3" :level="3"></mz-anchor>
<mz-anchor name="a-anchor-4" title="锚点-4" :level="4"></mz-anchor>
<mz-anchor name="a-anchor-5" title="锚点-5" :level="5"></mz-anchor>
<mz-anchor name="a-anchor-6" title="锚点-6" :level="6"></mz-anchor>
<mz-anchor name="a-anchor-7" title="锚点-7" :level="7"></mz-anchor>
<mz-anchor name="a-anchor-8" title="锚点-8" :level="8"></mz-anchor>
<mz-anchor name="a-anchor-9" title="锚点-9" :level="9"></mz-anchor>
```
:::

### 隐蔽式锚点

不可见的锚点

:::demo `invisible`属性来控制锚点的可见性。
```html
<mz-anchor name="anchor-invisible" title="不可见锚点-1" :level="4" invisible></mz-anchor>
```
:::

### 与目录联动

配合 [目录(Catalogue)组件](catalogue) 使用效果更好。

:::demo 将 catalogue 设置 `anchorClassName`(自动匹配的锚点class名称)，与 anchor 设置 `anchorClass`(锚点class名称)保持一致。这样可以避免锚点出现互串的情况。
```html
<mz-row>
  <mz-col :span="12" 
    id="demo-anchor-scroll-container" 
    style="height: 300px; overflow-y: auto;">
    <mz-anchor name="anchor-1" anchorClass="demo-anchor"
      title="不可见锚点-1" :level="4" invisible></mz-anchor>
    <div style="height: 200px;"></div>
    <mz-anchor name="anchor-2" anchorClass="demo-anchor"
      title="锚点-2" :level="4"></mz-anchor>
    <div style="height: 200px;"></div>
    <mz-anchor name="anchor-3" anchorClass="demo-anchor"
      title="锚点-3" :level="4"></mz-anchor>
    <div style="height: 200px;"></div>
    <mz-anchor name="anchor-4" anchorClass="demo-anchor"
      title="锚点-4" :level="4"></mz-anchor>
    <div style="height: 200px;"></div>
    <mz-anchor name="anchor-5" anchorClass="demo-anchor"
      title="锚点-5" :level="4"></mz-anchor>
    <div style="height: 200px;"></div>
  </mz-col>

  <mz-col :span="12">
    <mz-catalogue container="#demo-anchor-scroll-container"  
      anchorClassName=".demo-anchor"></mz-catalogue>
  </mz-col>
</mz-row>
```
:::

### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
| name | (必填)锚点id名称，允许以下字符：[a-z],[A-Z],'-','_' | String | | |
| title | 标题 | String |||
|level|层级|Number|1-9|3|
|invisible|是否可见|Boolean|||
|symbol|标题前的锚点文字|String||¶|
|anchorClass|锚点文字的附加Class|String|||


### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| - | 标题 |  |