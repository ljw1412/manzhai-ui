## TableSimple 表格(简易版)

快速构建简单的表格。

### 基础用法
:::demo `data`属性是一个二维数组。
```html
<mz-table-simple :data="data"></mz-table-simple>

<script>
export default {
  data() {
    return {
      data:[
        ['甲','乙'],
        ['丙','丁','戊']
      ]
    }
  }
}
</script>
```
:::

### 有表头

:::demo 如果数组`header`为`true`，那么传入的数组下标为0的数组为表头。
```html
<mz-table-simple :data="data" header></mz-table-simple>

<script>
export default {
  data() {
    return {
      data:[
        ['甲','乙'],
        ['丙','丁','戊']
      ]
    }
  }
}
</script>
```
:::

### 自定义显示

进行简单的自定义样式。

:::demo 使用作用域插槽`th`、`td`，对头部和内容进行自定义布局。`插槽 prop` 的值是一个对象，其中`item`代表你传入的数据。
```html
<mz-table-simple :data="data" header>
  <template #th="{item}">{{item}}</template>
  <template #td="{item}">{{item.value}}</template>
</mz-table-simple>

<script>
export default {
  data() {
    return {
      data:[
        ['年份', '天干地支'],
        [{ value: '2010'},{ value: '庚寅'}],
        [{ value: '2011'},{ value: '辛卯'}],
        [{ value: '2012'},{ value: '壬辰'}],
        [{ value: '2013'},{ value: '癸巳'}],
        [{ value: '2014'},{ value: '甲午'}],
        [{ value: '2015'},{ value: '乙未'}],
        [{ value: '2016'},{ value: '丙申'}],
        [{ value: '2017'},{ value: '丁酉'}],
        [{ value: '2018'},{ value: '庚申'}],
        [{ value: '2019'},{ value: '己亥'}],
        [{ value: '2020'},{ value: '庚子'}],   
      ]
    }
  }
}
</script>
```
:::

### 高亮悬浮行

:::demo `hover`属性控制表格行是否悬浮效果。
```html
<mz-table-simple :data="data" header hover></mz-table-simple>

<script>
export default {
  data() {
    return {
      data:[
        ['年份', '天干地支'],
        ['2018', '庚申'],
        ['2019', '己亥'],
        ['2020', '庚子'],  
      ]
    }
  }
}
</script>
```
:::

### 线条

:::demo `lined`是否每行以线条分隔
```html
<mz-table-simple :data="data" header lined></mz-table-simple>

<script>
export default {
  data() {
    return {
      data:[
        ['年份', '天干地支'],
        ['2018', '庚申'],
        ['2019', '己亥'],
        ['2020', '庚子'],  
      ]
    }
  }
}
</script>
```
:::

### 边框

:::demo `border`属性控制是否显示边框。
```html
<mz-table-simple :data="data" header border></mz-table-simple>

<script>
export default {
  data() {
    return {
      data:[
        ['年份', '天干地支'],
        ['2018', '庚申'],
        ['2019', '己亥'],
        ['2020', '庚子'],  
      ]
    }
  }
}
</script>
```
:::

### 表单合并

只支持行合并。

:::demo 当一个值后面跟着null，那么那个单元格会与这个值合并。
```html
<mz-table-simple :data="data" header border>
</mz-table-simple>

<script>
export default {
  data() {
    return {
      data:[
        ['标题',null,null],
        ['甲','乙'],
        ['丙','丁','戊'],
        [null,'丁','戊'],
        ['丙',null,'戊'],
        ['丙','丁',null]
      ]
    }
  }
}
</script>
```
:::

### 单元样式

:::demo 当数据格式为对象时，可以使用`_style`,`_class`属性进行单独的样式控制。
```html
<mz-table-simple :data="data" header>
  <template #th="{item}">{{item.value}}</template>
  <template #td="{item}">{{item.value}}</template>
</mz-table-simple>

<script>
export default {
  data() {
    return {
      data:[
        [
          { value: '年份', _class: 'w-50' },
          { value: '天干地支'}
        ],
        [
          { value: '2018', _class: 'border'},
          { value: '庚申', _class: { 'text-left': true }}
        ],
        [
          { value: '2019', _class: 'text-yellow'},
          { value: '己亥'}
        ],
        [
          { value: '2020', _style: { 'color': 'red' }},
          { value: '庚子', _style: 'text-align: right;'}
        ]
      ]
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
|data|表格数据|(Object\|String)[][]||[]|
|header|是否有表头，如果为`true`,data[0]的数据将会作为表头|Boolean|||
|hover|表格行是否悬浮效果|Boolean|||
|border|表格是否显示边框|Boolean|||
|lined|表格是否每行以线条分隔|Boolean|||
|autoComplete|是否自动补全,会以表格最大长度行作为标准补齐表格|Boolean||true|
|align|文字对齐方向|String|left / center / right||'center'|
