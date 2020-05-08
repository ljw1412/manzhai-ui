## Heading 标题

有着不同级别的标题。

### 基础用法

标题的基础用法。

:::demo
```html
<mz-heading :level="1">Heading 1</mz-heading>
<mz-heading :level="2">Heading 2</mz-heading>
<mz-heading :level="3">Heading 3</mz-heading>
<mz-heading :level="4">Heading 4</mz-heading>
<mz-heading :level="5">Heading 5</mz-heading>
<mz-heading :level="6">Heading 6</mz-heading>
<mz-heading :level="7">Heading 7</mz-heading>
<mz-heading :level="8">Heading 8</mz-heading>
<mz-heading :level="9">Heading 9</mz-heading>
```
:::

### 锚点标题

带锚点的标题。

:::demo 当`anchor`属性值为 true，会为标题带上锚点，此时 heading 必须有 id。
```html
<mz-heading id="heading-1" :level="1" anchor>Heading 1</mz-heading>
<mz-heading id="heading-2" :level="2" anchor>Heading 2</mz-heading>
<mz-heading id="heading-3" :level="3" anchor>Heading 3</mz-heading>
<mz-heading id="heading-4" :level="4" anchor>Heading 4</mz-heading>
<mz-heading id="heading-5" :level="5" anchor>Heading 5</mz-heading>
<mz-heading id="heading-6" :level="6" anchor>Heading 6</mz-heading>
<mz-heading id="heading-7" :level="7" anchor>Heading 7</mz-heading>
<mz-heading id="heading-8" :level="8" anchor>Heading 8</mz-heading>
<mz-heading id="heading-9" :level="9" anchor>Heading 9</mz-heading>
```
:::

### 锚点标题与目录联动

带锚点的标题。配合 [目录(Catalogue)组件](catalogue) 使用。

:::demo 当`anchor`属性值为 string 类型，那么它将作为锚点的 class，此时可将catalogue的`target`属性值设置为与锚点 class一致时，目录就只会寻找带有指定class的锚点。
```html
<mz-row>
  <mz-col :span="12" 
    id="demo-heading-scroll-container" 
    style="height: 300px; overflow-y: auto;">
    <mz-heading id="heading-c-1" :level="1" anchor="heading-anchor">Heading 1</mz-heading>
    <br />
    <mz-heading id="heading-c-2" :level="2" anchor="heading-anchor">Heading 2</mz-heading>
    <br />
    <mz-heading id="heading-c-3" :level="3" anchor="heading-anchor">Heading 3</mz-heading>
    <br />
    <mz-heading id="heading-c-4" :level="4" anchor="heading-anchor">Heading 4</mz-heading>
    <br />
    <mz-heading id="heading-c-5" :level="5" anchor="heading-anchor">Heading 5</mz-heading>
    <br />
    <mz-heading id="heading-c-6" :level="6" anchor="heading-anchor">Heading 6</mz-heading>
    <br />
    <mz-heading id="heading-c-7" :level="7" anchor="heading-anchor">Heading 7</mz-heading>
    <br />
    <mz-heading id="heading-c-8" :level="8" anchor="heading-anchor">Heading 8</mz-heading>
    <br />
    <mz-heading id="heading-c-9" :level="9" anchor="heading-anchor">Heading 9</mz-heading>
    <div class="height-400"></div>
  </mz-col>

  <mz-col :span="12">
    <mz-catalogue sidebar
      container="#demo-heading-scroll-container"  
      target=".heading-anchor"></mz-catalogue>
  </mz-col>
</mz-row>
```
:::

### 口是心非的锚点标题

:::demo heading的`title`属性在锚点上优先级高于默认插槽。但是heading的文字显示默认插槽优先级高于`title`属性。因此可以实现目录标题与真实标题不一致的效果。
```html
<mz-row>
  <mz-col :span="12" 
    id="demo-heading-scroll-container-2" 
    style="height: 300px; overflow-y: auto;">
    <mz-heading id="heading-d-1" :level="1" anchor="heading-anchor-2" title="标题1">Heading 1</mz-heading>
    <br />
    <mz-heading id="heading-d-2" :level="2" anchor="heading-anchor-2">Heading 2</mz-heading>
    <br />
    <div class="height-400"></div>
  </mz-col>

  <mz-col :span="12">
    <mz-catalogue sidebar
      container="#demo-heading-scroll-container-2"  
      target=".heading-anchor-2"></mz-catalogue>
  </mz-col>
</mz-row>
```
:::

### 锚点标题(锚点不可见)

带锚点的标题，但锚点是隐藏的。

:::demo `invisible-anchor`属性来控制锚点的可见性。
```html
<mz-row>
  <mz-col :span="12" 
    id="demo-heading-scroll-container-3" 
    style="height: 300px; overflow-y: auto;">
    <mz-heading id="heading-e-1" :level="1"
      anchor="heading-anchor-3" invisible-anchor>Heading 1</mz-heading>
    <br />
    <mz-heading id="heading-e-2" :level="2"
      anchor="heading-anchor-3" invisible-anchor>Heading 2</mz-heading>
    <br />
    <mz-heading id="heading-e-3" :level="3"
      anchor="heading-anchor-3" invisible-anchor>Heading 3</mz-heading>
    <br />
    <mz-heading id="heading-e-4" :level="4"
      anchor="heading-anchor-3" invisible-anchor>Heading 4</mz-heading>
    <br />
    <mz-heading id="heading-e-5" :level="5"
      anchor="heading-anchor-3" invisible-anchor>Heading 5</mz-heading>
    <div class="height-400"></div>
  </mz-col>

  <mz-col :span="12">
    <mz-catalogue sidebar
      container="#demo-heading-scroll-container-3"  
      target=".heading-anchor-3"></mz-catalogue>
  </mz-col>
</mz-row>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|level|层级|Number|1-9|3|
|anchor|是否带有锚点，或者锚点的class|Boolean/String|||
|invisible-anchor|锚点是否可见|Boolean|||
|title|标题|String|||
|tag|元素标签|String||"div"|


#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|与title一致，优先级高于title||