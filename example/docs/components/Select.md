## Select 选择框

下拉菜单选择器。

### 基础用法
:::demo select的`list`属性与遍历option效果一致。
```html
<mz-select v-model="value" placeholder="目标">
  <mz-option v-for="item of list"
    :key="item.value"
    :value="item.value"
    :label="item.label"></mz-option>
</mz-select>

<script>
export default {
  data() {
    return {
      value: '',
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
}
</script>
```
:::

### 禁用

:::demo `disabled`属性控制下拉框的禁用状态。
```html
<mz-select v-model="value" placeholder="目标">
  <mz-option v-for="item of list"
    :disabled="item.disabled"
    :key="item.value"
    :value="item.value"
    :label="item.label"></mz-option>
</mz-select>

<mz-select v-model="value" placeholder="目标" :disabled="true">
  <mz-option v-for="item of list"
    :key="item.value"
    :value="item.value"
    :label="item.label"></mz-option>
</mz-select>

<script>
export default {
  data() {
    return {
      value: 1,
      list: [
        { value: 1, label: '甲' },
        { value: 2, label: '乙' },
        { value: 3, label: '丙' }
      ]
    }
  }
}
</script>
```
:::

### Select API
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value|绑定值|any|||
|placeholder|占位文本|String|||
|filterable|是否筛选|Boolean|||
|arrow|是否显示箭头|Boolean|||
| size | 尺寸 | String | small / medium / large   |  |
|animation|动画效果|String|同Tooltip的animation|'shift-away-subtle'|


#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|选择项选中状态变化|(value: any)|

### Option API
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value|选项的值|String|||
|label|选项的标签|String|||
|disabled|是否禁用|Boolean|||

#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|click|选项点击事件|({value: any,label:string})|