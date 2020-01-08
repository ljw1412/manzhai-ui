## Catalogue 目录

用于列出页面目录。

### 基础用法

:::demo 当 catalogue 组件的`manual`属性为 true，默认插槽才可以使用。
```html
<mz-catalogue manual>
  <mz-catalogue-item title="标题1" :level="1">
    <mz-catalogue-item title="标题1-1" :level="2">
      <mz-catalogue-item title="标题1-1-1" :level="3"></mz-catalogue-item>
      <mz-catalogue-item title="标题1-1-2" :level="3"></mz-catalogue-item>
    </mz-catalogue-item>
    <mz-catalogue-item title="标题1-2" :level="2"></mz-catalogue-item>
  </mz-catalogue-item>
  <mz-catalogue-item title="标题2" :level="1"></mz-catalogue-item>
  <mz-catalogue-item title="标题3" :level="1">
    <mz-catalogue-item title="标题3-1" :level="2"></mz-catalogue-item>
  </mz-catalogue-item>
</mz-catalogue>
```
:::

### 锚点目录

有位置跳转功能的目录

:::demo catalogue-item 的`target`属性指向页面锚点元素的 id
```html
<mz-row>
  <mz-col :span="16" 
    id="demo-scroll-container" 
    style="height: 300px; overflow-y: auto;">
    <div id="anchor-1">位置1</div>
    <div style="height: 200px;"></div>
    <div id="anchor-2">位置2</div>
    <div style="height: 200px;"></div>
    <div id="anchor-3">位置3</div>
    <div style="height: 200px;"></div>
    <div id="anchor-4">位置4</div>
  </mz-col>

 <mz-col :span="8">
    <mz-catalogue manual>
      <mz-catalogue-item title="位置1" :level="1" target="anchor-1"/>
      <mz-catalogue-item title="位置2" :level="1" target="anchor-2"/>
      <mz-catalogue-item title="位置3" :level="1" target="anchor-3"/>
      <mz-catalogue-item title="位置4" :level="1" target="anchor-4"/>
    </mz-catalogue>
  </mz-col>
</mz-row>
```
:::


