## Radio 选择框

在一组选项中进行单选。

### 基础用法

:::demo `inputValue`/`v-model`为当前选中值。`disabled`来控制能否选中。
```html
<div class="demo-font-size-14">当前值：{{value}}</div>
<mz-radio v-model="value"
  value="1">选项1</mz-radio>
<mz-radio v-model="value"
  value="2">选项2</mz-radio>
<mz-radio v-model="value"
  value="3" disabled>选项2</mz-radio>

<script>
export default {
  data() {
    return {
      value: '3'
    }
  }
}
</script>
```
:::

### 选项分组
:::demo radioGroup 的 `value`/`v-model` 来控制当前选中的选项值。
```html
<mz-radio-group name="radio-group-1"
  v-model="value"
  :data="list"></mz-radio-group>
<br>
<mz-radio-group name="radio-group-2"
  v-model="value2">
  <mz-radio value="1">选项1</mz-radio>
  <mz-radio value="2">选项2</mz-radio>
  <mz-radio value="3">选项3</mz-radio>
</mz-radio-group>

<script>
export default {
  data() {
    return {
      list: [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3', disabled: true }
      ],
      value: '1',
      value2: '1'
    }
  }
}
</script>
```
:::

### 边框选项
:::demo radioGroup的`border`或radio的`border`属性来控制以边框模式显示,也可以通过radioGroup的`data`属性数组中的对象进行单个控制，但radioGroup的`border`优先级更高。
```html
<mz-radio-group name="radio-group-3"
  v-model="value"
  border
  :data="list"></mz-radio-group>
<br>
<mz-radio-group name="radio-group-4"
  v-model="value2"
  :data="list"></mz-radio-group>
<br>
<mz-radio-group name="radio-group-5"
  v-model="value3">
  <mz-radio border value="1">选项1</mz-radio>
  <mz-radio border value="2">选项2</mz-radio>
  <mz-radio value="3">选项3</mz-radio>
</mz-radio-group>

<script>
export default {
  data() {
    return {
      list: [
        { value: '1', label: '选项1', border:true },
        { value: '2', label: '选项2', border: true },
        { value: '3', label: '选项3', disabled: true }
      ],
      value: '1',
      value2: '1',
      value3: '1'
    }
  }
}
</script>
```
:::

### 按钮选项

:::demo `button`属性控制选项以按钮形式显示。`border`属性控制按钮是否显示边框。
```html
<div>
  <mz-radio-group name="radio-group-7"
    v-model="value2"
    :data="list"
    button></mz-radio-group>
</div>
<br/>
<div>
  <mz-radio-group name="radio-group-6"
    v-model="value">
    <mz-radio-button value="1"
      border>选项1</mz-radio-button>
    <mz-radio-button value="2"
      border>选项2</mz-radio-button>
    <mz-radio-button value="3"
      border
      disabled>选项3</mz-radio-button>
  </mz-radio-group>
</div>

<script>
export default {
  data() {
    return {
      list: [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3', disabled: true}
      ],
      value: '1',
      value2: '1'
    }
  }
}
</script>
```
:::

### Radio&RadioButton API
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|inputValue/v-model|绑定值|any| | |
|value|选项值|any|||
|label|选择项标签|String|||
|name|同原生input的name属性|String|||
|border|是否有边框|Boolean|||
| ripple | 点击涟漪效果 | Boolean / Object | | { value: true, center: true } |
|disabled|是否禁用|Boolean|||

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
| 默认 |选择项标签，类似label属性||


### RadioGroup API
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value/v-model|绑定值|any|||
|name|同原生input的name属性|String|||
|data|选项数组，但插槽优先级更高|`Array<MzRadio>`|||
|button|是否为按钮|Boolean|||
|border|是否有边框|Boolean|||
|block|是否为块级元素|Boolean|||

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
| 默认 |选项组的内容||
