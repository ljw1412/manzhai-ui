## Select 选择框

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

### API