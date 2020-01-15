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

有位置跳转功能的目录。

:::demo catalogue-item 的`target`属性指向页面锚点元素的 id。
```html
<mz-row>
  <mz-col :span="16" 
    id="demo-scroll-container" 
    style="height: 300px; overflow-y: auto;">
    <div id="anchor-1">位置1</div>
    <div class="height-400"></div>
    <div id="anchor-2">位置2</div>
    <div class="height-400"></div>
    <div id="anchor-3">位置3</div>
    <div class="height-400"></div>
    <div id="anchor-4">位置4</div>
  </mz-col>

 <mz-col :span="8">
    <mz-catalogue manual>
      <mz-catalogue-item title="位置1" :level="1" target="#anchor-1"/>
      <mz-catalogue-item title="位置2" :level="1" target="#anchor-2"/>
      <mz-catalogue-item title="位置3" :level="1" target="#anchor-3"/>
      <mz-catalogue-item title="位置4" :level="1" target="#anchor-4"/>
    </mz-catalogue>
  </mz-col>
</mz-row>
```
:::

### 固定定位目录

将目录固定在某一个位置。

:::demo `fixed`属性控制是否固定。`offset`控制固定的偏移。
```html
<div>
  固定与偏移: <mz-switch v-model="fixed" /> 
  <span class="demo-font-size-14">{{fixed ? '固定' : '非固定'}}</span>
  <mz-row :gutter="10">
    <mz-col :sm="6">
      <mz-input v-model="offset.top" label="上" />
    </mz-col>
    <mz-col :sm="6">
      <mz-input v-model="offset.right" label="右" />
    </mz-col>
    <mz-col :sm="6">
      <mz-input v-model="offset.bottom" label="下" />
    </mz-col>
    <mz-col :sm="6">
      <mz-input v-model="offset.left" label="左" />
    </mz-col>
  </mz-row>

  <mz-catalogue manual :fixed="fixed" :offset="offset">
    <mz-catalogue-item title="位置1" :level="1" target="#anchor-1"/>
    <mz-catalogue-item title="位置2" :level="1" target="#anchor-2"/>
    <mz-catalogue-item title="位置3" :level="1" target="#anchor-3"/>
    <mz-catalogue-item title="位置4" :level="1" target="#anchor-4"/>
  </mz-catalogue>
</div>

<script>
export default {
  data(){
    return {
      fixed: false,
      offset: {
        top: '',
        right: '50px',
        bottom: '50px',
        left: ''
      }
    }
  }
}
</script>
```
:::

### 有侧边线目录

左侧有节点线条。

:::demo 通过`sidebar`属性控制线条显示与否。
```html
<mz-catalogue manual sidebar>
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

### 与锚点联动

配合 [锚点(Anchor)组件](anchor) 使用效果更好。

:::demo 将 catalogue 设置`anchorClassName`(自动匹配的锚点class名称)，与 anchor 设置`class`保持一致。这样可以避免锚点出现互串的情况。anchor 的`title`属性值，会作为目录元素的标题。
```html
<mz-row>
  <mz-col :span="12" 
    id="demo-anchor-scroll-container" 
    style="height: 300px; overflow-y: auto;">
    <div class="height-400">
      <mz-anchor class="demo-anchor" 
        href="#catalogue-anchor-1" title="不可见锚点" invisible></mz-anchor>
      <span id="catalogue-anchor-1">我是不可见锚点</span>
    </div>
    <div class="height-400">    
      <mz-anchor class="demo-anchor" 
        href="#catalogue-anchor-2" title="锚点-2"></mz-anchor> 
      <span id="catalogue-anchor-2">锚点-2</span>
    </div>
    <div class="height-400">    
      <mz-anchor class="demo-anchor" 
        href="#catalogue-anchor-3" title="锚点-3"></mz-anchor> 
      <span id="catalogue-anchor-3">锚点-3</span>
    </div>
    <div class="height-400">    
      <mz-anchor class="demo-anchor" 
        href="#catalogue-anchor-4" title="锚点-4"></mz-anchor> 
      <span id="catalogue-anchor-4">锚点-4</span>
    </div>
    <div class="height-400">    
      <mz-anchor class="demo-anchor" 
        href="#catalogue-anchor-5" title="锚点-5"></mz-anchor> 
      <span id="catalogue-anchor-5">锚点-5</span>
    </div>
  </mz-col>

  <mz-col :span="12">
    <mz-catalogue sidebar
      container="#demo-anchor-scroll-container"  
      target=".demo-anchor"></mz-catalogue>
  </mz-col>
</mz-row>
```
:::

### 平滑滚动

使用JS方法触发滚动效果。此时不会采用hash。

:::demo 注意: 该方法使用了`Element.scrollIntoView({ behavior: 'smooth' })`，浏览器兼容性`firefox 36+ | chrome 61+ | Opera 48+`。
```html
<mz-row>
  <mz-col :span="12" 
    id="demo-anchor-scroll-container-2" 
    style="height: 300px; overflow-y: auto;">
    <div class="height-400">
      <mz-anchor class="scroll-smooth-anchor"
        href="#scroll-smooth-anchor-1" 
        title="锚点-1" :level="4"></mz-anchor>
        <span id="scroll-smooth-anchor-1">锚点-1</span>
    </div>
      <mz-anchor class="scroll-smooth-anchor"
        href="#scroll-smooth-anchor-2" 
        title="锚点-1.1" :level="5"></mz-anchor>
        <span id="scroll-smooth-anchor-2">锚点-1.1</span>
    <div class="height-400"></div>
      <mz-anchor class="scroll-smooth-anchor"
        href="#scroll-smooth-anchor-3" 
        title="锚点-1.2" :level="5"></mz-anchor>
        <span id="scroll-smooth-anchor-3">锚点-1.2</span>
    <div class="height-400"></div>
      <mz-anchor class="scroll-smooth-anchor"
        href="#scroll-smooth-anchor-4" 
        title="锚点-2" :level="4"></mz-anchor>
        <span id="scroll-smooth-anchor-4">锚点-2</span>
    <div class="height-400"></div>
      <mz-anchor class="scroll-smooth-anchor"
        href="#scroll-smooth-anchor-5" 
        title="锚点-3" :level="4"></mz-anchor>
        <span id="scroll-smooth-anchor-5">锚点-3</span>
    <div class="height-400"></div>
  </mz-col>

  <mz-col :span="12">
    <mz-catalogue sidebar scroll-smooth 
      container="#demo-anchor-scroll-container-2"  
      target=".scroll-smooth-anchor"></mz-catalogue>
  </mz-col>
</mz-row>
```
:::

### Catalogue API

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|fixed|是否固定定位|Boolean|||
|absolute|是否绝对定位|Boolean|||
|offset|定位偏移量|Object:{left,right,top,bottom}|||
|container|锚点所在父级|String|||
|scroll-smooth|是否使用js平滑滚动|Boolean|||
|zIndex|层级|Number||1000|
|manual|是否为手动目录|Boolean|||
|flat|扁平化目录，仅在非手动模式有效|Boolean|||
|target|锚点的类名|String|||
|sidebar|是否有侧边线|Boolean|||
|sidebar-color|侧边线颜色|String|||
|sidebar-point-color|侧边线点的颜色|String|||
|sidebar-arrow-color|侧边线箭头的颜色|String|||

#### 方法
|名称|说明|参数|
|---|---|---|
|initCatalogue|在自动模式有效，初始化目录，自动获取锚点。||


#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|在手动模式有效，目录的内容||

### CatalogueItem API

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|title|标题|String|||
|active|是否选中|Boolean|||
|level|等级|Number|1-9||
|target|锚点目标名称|String|||
|scroll-smooth|是否使用js滚动|Boolean|||

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|目录子级||

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|click|点击事件||