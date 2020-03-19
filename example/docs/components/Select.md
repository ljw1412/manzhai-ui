## Select 选择框

下拉菜单选择器。

### 基本用法
:::demo select的`list`属性与遍历option效果一致。
```html
<mz-select v-model="value" :list="list"></mz-select>
<mz-select v-model="value" label="目标">
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

### 同宽下拉框

使下拉框与选择框一样宽。
:::demo `dropdownMatchSelectWidth`属性控制下拉框是否与选择框同宽。
```html
<mz-select v-model="value" :list="list" dropdownMatchSelectWidth></mz-select>

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

### 带搜索功能的选择框
选择框能够搜索快速找到选项。

:::demo `search`属性控制选择框能否搜索。`under`属性控制下拉框不会遮住选择框。
```html
<mz-select v-model="value" :list="list" dropdownMatchSelectWidth search under></mz-select>

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
|list|选项列表|Array|||
|valueName|列表中对象代表值的属性名称|String||'value'|
|labelName|列表中对象代表值的标签名称|String||'label'|
|search|是否有搜索|Boolean|||
|dropdownMatchSelectWidth|是否与选择框同宽|Boolean|||
|appendToBody|是否将下拉框置入body下|Boolean|||
|under|是否将下拉框显示在选择框下方|Boolean|||

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|选择项选中状态变化|(value: any,item:Object)|

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
|click|选项点击事件|(value: any,item:Object)|