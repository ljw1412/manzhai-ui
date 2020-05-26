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

:::demo
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