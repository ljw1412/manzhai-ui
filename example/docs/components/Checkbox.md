## Checkbox 多选框

在数个选项中进行多选。

### 基础用法

单独使用可以表示两种状态。

:::demo 定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。如果你定义了`trueValue`或`falseValue`时，选中返回`trueValue`表示的值。

```html
<div>
  <mz-checkbox v-model="value2">选择项</mz-checkbox>
  <span class="fs-14">当前值：{{value2}}</span>

  <mz-checkbox v-model="value"
    trueValue="开"
    falseValue="关">选择项</mz-checkbox>
  <span class="fs-14">当前值：{{value}}</span>
</div>

<script>
export default{
  data(){
    return {
      value: '关',
      value2: false
    }
  }
}
</script>
```
:::

### 禁用状态

多选框不可用状态。

:::demo 你可以通过`disabled`属性来修改按钮的禁用状态。

```html
<div>
  <mz-checkbox v-model="checked1" disabled>选择项</mz-checkbox>
  <mz-checkbox v-model="checked2" disabled>选择项</mz-checkbox>
</div>

<script>
export default{
  data() {
    return {
      checked1: false,
      checked2: true
    }
  }
}
</script>
```
:::


### 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::demo `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在`Group`中使用`v-model`绑定`Array`类型的变量即可。 `checkbox`的`value`属性是该 checkbox 对应的值，`label`属性是该 checkbox 对应的标签，也可以通过默认插槽设置。`value`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<div>
  <div class="fs-14">当前值：{{value}}</div>
  <mz-checkbox-group v-model="value">
    <mz-checkbox value="A">选择项A</mz-checkbox>
    <mz-checkbox value="B">选择项B</mz-checkbox>
    <mz-checkbox value="C">选择项C</mz-checkbox>
    <mz-checkbox value="D" disabled>选择项C</mz-checkbox>
    <mz-checkbox value="E" disabled>选择项E</mz-checkbox>
  </mz-checkbox-group>
</div>

<script>
export default{
  data() {
    return {
      value: ['A','E']
    }
  }
}
</script>
```
:::

### 不确定状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

:::demo

```html
<div>
  <div class="fs-14">当前值：{{value}}</div>
  <mz-checkbox v-model="isAll"
    :indeterminate="indeterminate"
    @change="onCheckAll">全选</mz-checkbox>
  <mz-checkbox-group v-model="value"
    @change="onGroupChange">
    <mz-checkbox value="A">选择项A</mz-checkbox>
    <mz-checkbox value="B">选择项B</mz-checkbox>
    <mz-checkbox value="C">选择项C</mz-checkbox>
    <mz-checkbox value="D" disabled>选择项C</mz-checkbox>
  </mz-checkbox-group>
</div>

<script>
export default{
  data() {
    return {
      isAll: false,
      value: ['D']
    }
  },

  computed: {
    indeterminate() {
      return this.value.length > 0 && this.value.length < 4
    }
  },

  methods: {
    onCheckAll(checked) {
      this.value = checked ? ['A','B','C','D'] : []
    },

    onGroupChange(data) {
      this.isAll = data.length >= 4
    }
  }
}
</script>
```
:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的多选框。

```html
<div>
  <mz-checkbox v-model="value" border>选择项1</mz-checkbox>
  <mz-checkbox v-model="value2" border>选择项2</mz-checkbox>
  <mz-checkbox :input-value="true" border disabled>选择项3</mz-checkbox>
  <mz-checkbox :input-value="false" border disabled>选择项4</mz-checkbox>
</div>

<script>
export default{
  data(){
    return {
      value: true,
      value2: false
    }
  }
}
</script>
```
:::

### Checkbox API 

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|inputValue/v-model|当前选中值|any| | |
|value|当前选项代表的值||||
|label|选项名称|String| | |
|name|同原生input的name属性|String|||
|disabled|是否禁用|Boolean| | |
|indeterminate|是否不确定状态|Boolean| | |
|border|是否边框模式|Boolean| | |
|tabIndex|tab 键控制次序|Number| | |
|trueValue|选中的值|any| ||
|falseValue|未被选中的值|any| ||

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|同label||

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|选项选中状态修改事件|(value, ev)|

### CheckboxGroup API 
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|value/v-model|当前值|Array| | [] |

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|选项选中状态修改事件|由选中选项的value值组成的数组|