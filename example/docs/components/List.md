## List 列表

以列的布局展示数据。

### 基础用法
:::demo 
```html
<mz-card width="300px" class="m-auto">
  <mz-list>
    <mz-list-item title="所有人" text="来个火箭">
      <mz-icon slot="prefix" name="at" size="30"></mz-icon>
    </mz-list-item>
    <mz-list-item title="666666" text="可以的">
      <mz-icon slot="suffix" name="rocket" size="30"></mz-icon>
    </mz-list-item>
  </mz-list>
</mz-card>
```
:::

### 分割线
:::demo `divider`可以控制列表是否带有分割线。
```html
<mz-card width="300px" class="m-auto">
  <mz-list divider>
    <mz-list-item title="所有人" text="来个火箭">
      <mz-icon slot="prefix" name="at" size="30"></mz-icon>
    </mz-list-item>
    <mz-list-item title="?????" text="被墙了o(╥﹏╥)o">
      <mz-icon slot="suffix" name="rocket" size="30"></mz-icon>
    </mz-list-item>
  </mz-list>
</mz-card>
```
:::

### 可以点击
:::demo `clickable`控制能否点击的效果。
```html
<mz-card width="300px" class="m-auto">
  <mz-list clickable>
    <mz-list-item title="所有人" text="来个火箭">
      <mz-icon slot="prefix" name="at" size="30"></mz-icon>
    </mz-list-item>
    <mz-list-item title="666666" text="可以的">
      <mz-icon slot="suffix" name="rocket" size="30"></mz-icon>
    </mz-list-item>
  </mz-list>
</mz-card>
```
:::

### 列表元素间隔
:::demo `gutter`可以控制列表元素间的间距。
```html
<mz-list width="300px" class="m-auto" gutter="10px">
  <mz-list-item v-for="i of 4" :key="i">
    <mz-card height="50px"><span>我是卡片{{i}}</span></mz-card>
  </mz-list-item>
</mz-list>

<style>
.mz-card{
  display: flex;
}
.mz-card > span{
  margin: auto;
}
</style>
```
:::

### 禁用列表
:::demo List的`disabled`属性可以控制整个列表的禁用状态。也可以单独控制ListItem。
```html
<mz-card width="300px">
  <mz-list disabled>
    <mz-list-item title="所有人" text="来个火箭">
      <mz-icon slot="prefix" name="at" size="30"></mz-icon>
    </mz-list-item>
    <mz-list-item title="5555555" text="被禁用不可以">
    </mz-list-item>
  </mz-list>
</mz-card>

<mz-card width="300px">
  <mz-list>
    <mz-list-item title="所有人" text="来个火箭">
      <mz-icon slot="prefix" name="at" size="30"></mz-icon>
    </mz-list-item>
    <mz-list-item disabled title="5555555" text="被禁用不可以">
    </mz-list-item>
  </mz-list>
</mz-card>

<style>
.mz-card {
  display: inline-block;
}
.mz-card + .mz-card {
  margin-left: 10px;
}
</style>
```
:::

### 可选择的列表
:::demo 当`list`有`value/v-model`属性时，进入选择模式，且`list-item`的`value`属性不能为`undefined`，使用`list-item`的`item`属性传入任意相关数据。
```html
<mz-list v-model="value" 
  width="300px" class="m-auto"
  @change="change" @item-click="itemClick">
  <mz-list-item v-for="item of list"
    :item="item"
    :key="item.value" 
    :value="item.value"
    :disabled="item.disabled">
    <mz-card height="50px"><span>我是{{item.title}}</span></mz-card>
  </mz-list-item>
</mz-list>
<div class="demo-font-size-14">当前值：{{value}}</div>
<div class="demo-font-size-14">上一次改变(change)：{{changeItem}}</div>
<div class="demo-font-size-14">点击对象(item-click)：{{currentItem}}</div>

<script>
export default {
  data() {
    return {
      value: '',
      currentItem:{},
      changeItem:{},
      list: [
        {title:'甲',value:1,disabled:false},
        {title:'乙(禁用)',value:2,disabled:true},
        {title:'丙',value:3,disabled:false},
        {title:'丁',value:4,disabled:false},
      ]
    }
  },
  methods:{
    change(value, item) {
      this.changeItem = item
    },
    itemClick(value, item, disabled) {
      this.currentItem = item
    }
  }
}
</script>

<style>
.mz-card{
  display: flex;
}
.mz-card > span{
  margin: auto;
}
</style>
```
:::


### 不同大小

:::demo `size`属性控制输入框的大小，可选值`small`、`medium`、`(默认)`、`large`。
```html
<mz-card v-for="size of sizeList"
   width="200px" :key="size">
  <mz-list :size="size">
    <mz-list-item title="所有人" text="来个火箭">
      <mz-icon slot="prefix" name="at" size="30"></mz-icon>
    </mz-list-item>
    <mz-list-item title="666666" text="可以的">
      <mz-icon slot="suffix" name="rocket" size="30"></mz-icon>
    </mz-list-item>
  </mz-list>
</mz-card>

<script>
export default {
  data() {
    return {
      sizeList: ['small','medium','','large']
    }
  }
}
</script>

<style>
.mz-card {
  display: inline-block;
}
.mz-card + .mz-card {
  margin-left: 10px;
}
</style>
```
:::

### 嵌套

:::demo
```html
<mz-card width="300px">
  <mz-list divider clickable>
    <mz-list-item-group title="列表组">
      <mz-list-item v-for="item of list"
        :key="item.value"
        :title="item.title"
        :item="item"></mz-list-item>
    </mz-list-item-group>
    <mz-list-item-group title="列表组2">
      <mz-list-group label="标签名称">
        <mz-list-item v-for="item of list"
          :key="item.value"
          :title="item.title"
          :item="item"></mz-list-item>
      </mz-list-group>
    </mz-list-item-group>
    <mz-list-item-group title="多层嵌套">
      <mz-list-item v-for="item of list"
        :key="item.value"
        :title="item.title"
        :item="item"></mz-list-item>
      <mz-list-item-group title="多层嵌套+">
        <mz-list-item v-for="item of list"
          :key="item.value"
          :title="item.title"
          :item="item"></mz-list-item>
      </mz-list-item-group>
    </mz-list-item-group>
    <mz-list-item v-for="item of list"
      :key="item.value"
      :title="item.title"
      :item="item"></mz-list-item>
  </mz-list>
</mz-card>

<script>
export default {
  data() {
    return {
      list: [
        { title: '测试 1', value: '1' },
        { title: '测试 2', value: '2' },
        { title: '测试 3', value: '3' }
      ]
    }
  }
}
</script>
```
:::


### List API 

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
| value/v-model |绑定值|String|||
| size | 尺寸 | String | small / medium / large   |  |
| gutter |列表元素的间隔距离|String|||
| divider |是否有分割线|Boolean|||
| clickable |列表元素能否点击|Boolean|||
| disabled | 是否禁用状态 | Boolean | | |
| width | 宽度 | String |||
| min-width | 最小宽度 | String |||
| max-width | 最大宽度 | String |||
| height | 高度 | String |||
| min-height | 最小高度 | String |||
| max-height | 最大高度 | String |||
| ripple | 点击涟漪效果 | Boolean / Object | | |

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|列表内容||

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|选中改变事件|(value:选中的值,item:元素挂载的item属性)|
|item-click|元素点击事件|(value:选中的值,item:元素挂载的item属性,disabled:禁用状态)|


### ListItem API 

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
| value |元素的值|any|||
| item |元素携带数据|any|||
| size | 尺寸 | String | small / medium / large   |  |
|title|标题|String|||
|text|文本|String|||
|disabled||Boolean|||
|clickable||Boolean|||
|round||Boolean/String|left / right / mini||
| ripple | 点击涟漪效果 | Boolean / Object | | |

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|列表元素的内容，完全自定义||
|prefix|前缀内容||
|suffix|后缀内容||
|content|中间内容，`title`，`text`所在的整体||
|title|标题||
|text|文本||

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|click|点击事件|(e:MouseEvent)|