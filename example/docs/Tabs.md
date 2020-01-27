## Tabs 标签页

### 基本用法

:::demo tabs的`value`/`v-model`表示当前显示的标签值，即与tab的`value`属性对应。
```html
<mz-tabs v-model="value">
  <mz-tab v-for="index of 5"
    :key="index"
    :label="'Tab'+index"
    :value="index">标签页{{index}}</mz-tab>
</mz-tabs>

<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>
```
:::

### 标签平铺
:::demo tabs的`grow`属性可以控制标签是否平铺。
```html
<mz-tabs v-model="value" grow>
  <mz-tab v-for="index of 5"
    :key="index"
    :label="'Tab'+index"
    :value="index">标签页{{index}}</mz-tab>
</mz-tabs>

<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>
```
:::

### 标签滑动
:::demo 当tabs下的tab超出显示范围，将以滚动显示进行显示。
```html
<mz-tabs v-model="value" grow>
  <mz-tab v-for="index of 30"
    :key="index"
    :label="'Tab'+index"
    :value="index">标签页{{index}}</mz-tab>
</mz-tabs>

<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>
```
:::

### 标签水平位置
:::demo `align` 属性控制标签的水平位置，可选值`left` 、 `center` 、 `right`。
```html
<mz-filter-section v-model="align" label="align:" label-position="left">
  <mz-filter-section-item v-for="item of alignList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>

<mz-tabs v-model="value" :align="align">
  <mz-tab v-for="index of 5"
    :key="index"
    :label="'Tab'+index"
    :value="index">标签页{{index}}</mz-tab>
</mz-tabs>

<script>
export default {
  data() {
    return {
      align: 'left',
      alignList: [ 'left' , 'center' , 'right' ],
      value: 1
    }
  }
}
</script>
```
:::


### Tabs Api
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|animation|是否有切换时的动画效果|Boolean|||
|grow|是否平铺|Boolean|||
|align|标签位置|String|'left' / 'center' / 'right'|'left'|
|activeBarMode|活动条的样式|String|'fill' / 'none'|'none'|

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|标签卡||

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|标签页切换事件|value|

### Tab Api
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value|选项卡的值|any|||
|label|选项卡的标签|String|||
|disabled|是否禁用|Boolean|||
| ripple | 点击涟漪效果 | Boolean / Object | | true |

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|选项卡下的内容||

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|click|选项卡点击事件|value|