## Grid 栅格布局

按照 24 等分的原则进行划分。

### 基础布局

固定等分的基础栅格布局。

:::demo 通过设置 col 的 `span`属性我们可以进行列的不同组合搭配。
```html
<mz-row>
  <mz-col :span="24"><div class="grid-col bg-dark"></div></mz-col>
</mz-row>

<mz-row>
  <mz-col :span="12"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="12"><div class="grid-col bg-light"></div></mz-col>
</mz-row>

<mz-row>
  <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="8"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
</mz-row>

<mz-row>
  <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="6"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="6"><div class="grid-col bg-light"></div></mz-col>
</mz-row>

<mz-row>
  <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="4"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="4"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="4"><div class="grid-col bg-light"></div></mz-col>
</mz-row>

<style lang="scss">
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: var(--color-primary);
}
.bg-light{
  background-color: var(--color-primary-8);
}
.bg-dark{
  background-color: var(--color-primary-12);
}
</style>
```
:::

### 列的间隔

:::demo 通过 row 的`gutter`属性来指定每一栏之间的间隔，默认间隔为 0。
```html
<mz-row :gutter="16">
  <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="8"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
</mz-row>
<mz-row :gutter="16">
  <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="6"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="6"><div class="grid-col bg-light"></div></mz-col>
</mz-row>

<style lang="scss">
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: var(--color-primary);
}
.bg-light{
  background-color: var(--color-primary-8);
}
</style>
```
:::

### 自由布局

栅格的一行分为24等分，那么我们就可以自由分配进行复杂的布局。

:::demo
```html
<mz-row :gutter="16">
  <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="16"><div class="grid-col bg-light"></div></mz-col>
</mz-row>

<mz-row :gutter="16">
  <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="8"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="12"><div class="grid-col bg-light"></div></mz-col>
</mz-row>

<mz-row :gutter="16">
  <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="8"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :span="8"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :span="4"><div class="grid-col bg-base"></div></mz-col>
</mz-row>

<style lang="scss">
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: var(--color-primary);
}
.bg-light{
  background-color: var(--color-primary-8);
}
</style>
```
:::

### 列的偏移

支持偏移指定的列数。

:::demo 通过设置col的`offset`属性可以使当前列偏移指定列数。
```html
<mz-row :gutter="16">
  <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="6" :offset="6"><div class="grid-col bg-base"></div></mz-col>
</mz-row>

<mz-row :gutter="16">
  <mz-col :span="6" :offset="6"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="6" :offset="6"><div class="grid-col bg-base"></div></mz-col>
</mz-row>

<mz-row :gutter="16">
  <mz-col :span="12" :offset="6"><div class="grid-col bg-base"></div></mz-col>
</mz-row>

<style lang="scss">
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: var(--color-primary);
}
</style>
```
:::

### 对齐方式

通过`flex`布局来对行内列元素进行对齐。

:::demo 通过设置 row 的`flex`属性，来启用 flex 布局。启动之后，可以通过`justify`属性指定 'start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'中的值来定义列元素的水平布局。通过`align`属性指定'top', 'middle', 'bottom'中的值来定义列的垂直布局。
```html 
<mz-row flex :justify="justify" :align="align">
  <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :span="6"><div class="grid-col bg-light" style="height:64px"></div></mz-col>
  <mz-col :span="6"><div class="grid-col bg-base"></div></mz-col>
</mz-row>
<br>
<mz-filter-section v-model="align" label="align">
  <mz-filter-section-item v-for="item of alignList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>
<mz-filter-section v-model="justify" label="justify">
  <mz-filter-section-item v-for="item of justifyList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>

<script>
export default {
  data() {
    return {
      align: 'top',
      justify: 'start',
      alignList: ['top', 'middle', 'bottom'],
      justifyList: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly']
    }
  }
}
</script>

<style lang="scss">
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: var(--color-primary);
}
.bg-light{
  background-color: var(--color-primary-8);
}
</style>
```
:::

### 响应式布局

参考 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg`和`xl`。

:::demo
```html
<mz-row :gutter="16">
  <mz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-col bg-base"></div></mz-col>
  <mz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-col bg-light"></div></mz-col>
  <mz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-col bg-base"></div></mz-col>
</mz-row>

<style>
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: var(--color-primary);
}
.bg-light{
  background-color: var(--color-primary-8);
}
</style>
```
:::

### 列的隐藏

在某些情况下，隐藏部分列。

:::demo 将col的属性值 `span`、`xs`、`sm`、`md`、`lg`、`xl`设为0即可。
```html
<mz-row :gutter="16">
  <mz-col :xs="0" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-col bg-base">1</div></mz-col>
  <mz-col :xs="4" :sm="0" :md="8" :lg="3" :xl="10"><div class="grid-col bg-base">2</div></mz-col>
  <mz-col :xs="4" :sm="6" :md="0" :lg="3" :xl="10"><div class="grid-col bg-base">3</div></mz-col>
  <mz-col :xs="8" :sm="6" :md="4" :lg="0" :xl="1"><div class="grid-col bg-base">4</div></mz-col>
  <mz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="0"><div class="grid-col bg-base">5</div></mz-col>
</mz-row>

<style>
.mz-row{
  margin-bottom:20px;
}
.mz-row:last-child {
  margin-bottom: 0;
}
.mz-col{
  border-radius: 4px;
}
.grid-col{
  min-height: 48px;
}
.bg-base{
  background-color: var(--color-primary);
}
.bg-light{
  background-color: var(--color-primary-8);
}
</style>
```
:::

### Row Api

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|gutter|栅格间隔|Number|||
|flex|flex布局模式，现代浏览器下有效|String|||
|align|flex 布局下的垂直排列方式|String|top / middle / bottom||
|justify|flex 布局下的水平排列方式|String|start / center / end / space-between / space-around / space-evenly||
|tag|自定义元素标签|String|*|div|


### Col Api

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|span|栅格占据的列数|Number||24|
|offset|栅格左侧的间隔格数|Number||0|
|push|栅格向右移动格数|Number||0|
|pull|栅格向左移动格数|Number||0|
|xs|<768px 响应式栅格数或者栅格属性对象|Number|||
|sm|≥768px 响应式栅格数或者栅格属性对象|Number|||
|md|≥992px 响应式栅格数或者栅格属性对象|Number|||
|lg|≥1200px 响应式栅格数或者栅格属性对象|Number|||
|xl|≥1920px 响应式栅格数或者栅格属性对象|Number|||
|tag|自定义元素标签|String|*|div|