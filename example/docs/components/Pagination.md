## Pagination 分页

以分页的形式，展示大量的数据。

### 基础用法

:::demo `index/v-model`绑定当前页码。
```html
<mz-pagination v-model="index" 
  :page-size="10" :total="70"></mz-pagination>

<mz-pagination v-model="index2" 
  :page-size="10" :total="198"></mz-pagination>

<script>
export default {
  data (){
    return {
      index: 1,
      index2: 1
    }
  }
}
</script>
```
:::

### 设置最大显示页码数

:::demo `max`属性设置最大显示页码数，即总页数超过`max`会折叠多余的页码按钮。默认值`7`,可选值`4到20之间的奇数`。
```html
<mz-pagination 
  v-model="index" 
  :page-size="10"
  :total="198"
  :max="13"></mz-pagination>

<script>
export default {
  data (){
    return {
      index: 1
    }
  }
}
</script>
```
:::

### 圆角和外边框

:::demo `outlined`和`circle`分别控制是否显示外边框和是否为圆角。
```html
<mz-pagination v-model="index2" outlined
  :page-size="10" :total="198"></mz-pagination>

<mz-pagination v-model="index2" circle
  :page-size="10" :total="198"></mz-pagination>

<mz-pagination v-model="index3" outlined circle
  :page-size="10" :total="198"></mz-pagination>

<script>
export default {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1
    }
  }
}
</script>
```
:::

### 自定义布局
:::demo 通过`layout`可以自由设定分页组件的布局。可选值`prev`,`next`,`sizes`,`pager`,`jumper`,`total`,`|`。
```html
<span class="demo-font-size-14">带总数</span>
<mz-pagination 
  v-model="index" 
  :layout="['total', 'prev', 'pager', 'next']"
  :page-size="10" 
  :total="100"></mz-pagination>
<span class="demo-font-size-14">自选每页显示条数</span>
<mz-pagination 
  v-model="index2" 
  :layout="['sizes','prev', 'pager', 'next']"
  :page-size.sync="pageSize2"
  :total="100"></mz-pagination>
<span class="demo-font-size-14">跳转到指定页数</span>
<mz-pagination 
  v-model="index3" 
  :layout="['prev', 'pager', 'next', 'jumper']"
  :page-size="10" 
  :total="100"></mz-pagination>
<span class="demo-font-size-14">全部功能</span>
<mz-pagination 
  v-model="index4" 
  :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']"
  :page-size.sync="pageSize4" 
  :total="100"></mz-pagination>

<script>
export default {
  data (){
    return {
      index: 1,
      index2: 1,
      pageSize2:10,
      index3: 1,
      index4: 1,
      pageSize4:10,
    }
  }
}
</script>
```
:::

### 左右布局
:::demo 在`layout`属性中，使用`|`符号分隔左右。
```html
<mz-pagination 
  v-model="index" 
  :layout="['|', 'total', 'prev', 'pager', 'next']"
  :page-size="10" 
  :total="100"></mz-pagination>

<mz-pagination 
  v-model="index" 
  :layout="['total', '|', 'prev', 'pager', 'next']"
  :page-size="10" 
  :total="100"></mz-pagination>

<mz-pagination 
  v-model="index" 
  :layout="['prev', 'pager', 'next', '|', 'total' , 'jumper']"
  :page-size="10" 
  :total="100"></mz-pagination>
```
:::

### 不同大小
:::demo `size`属性控制分页组件的大小，可选值`small`、`medium`、`(默认)`、`large`。
```html
<mz-pagination v-model="index" size="small"
  :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']"
  :page-size.sync="pageSize1" :total="100"></mz-pagination>

<mz-pagination v-model="index2" size="medium"
  :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']"
  :page-size.sync="pageSize2" :total="100"></mz-pagination>

<mz-pagination v-model="index3"
  :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']"
  :page-size.sync="pageSize3" :total="100"></mz-pagination>

<mz-pagination v-model="index4" size="large"
  :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']"
  :page-size.sync="pageSize4" :total="100"></mz-pagination>

<script>
export default {
  data (){
    return {
      index: 1,
      index2: 1,
      index3: 1,
      index4: 1,
      pageSize1: 10,
      pageSize2: 10,
      pageSize3: 10,
      pageSize4: 10
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
|index/v-model|当前页码|Number||1|
|pageSize|每页显示条目个数，支持 .sync 修饰符|Number||10|
|total|总条目数|Number|||
|pageCount|总页数，与total二选一|Number|||
|max|最大页码按钮的数量，当总页数超过该值时会折叠|Number|4到20之间的奇数|7|
|pageSizes|每页显示个数选择器的选项设置，需要配合total属性|number[]||[10, 20, 30, 40, 50]|
|outlined|是否使用边框模式|Boolean|||
|circle|是否为圆型|Boolean|||
|disabled|是否禁用|Boolean|||
|layout|布局|string[]|`prev`,`next`,`sizes`,`pager`,`jumper`,`total`,`|`|['prev', 'pager', 'next']|
|totalText|总数文案|String||'共 %d 条'|
|sizeText|每页显示数量的文案|String||'%d 条/页'|


#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|当前页码改变事件|(num:Number)|
|size-change|每页显示个数改变事件|(size:Number)|
|prev-click|点击上一页改变当前页后触发|(index:Number)|
|next-click|点击下一页改变当前页后触发|(index:Number)|