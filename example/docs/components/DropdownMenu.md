## DropdownMenu 下拉菜单

可做一些操作的下拉框。

### 基础用法

:::demo `data`属性控制显示的选项数组。
```html
<mz-dropdown-menu :data="list">
  <mz-button>下拉菜单</mz-button>
</mz-dropdown-menu>

<script>
export default {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3' }
      ]
    }
  }
}
</script>
```
:::

### 带图标

:::demo `data`属性控制显示的选项数组。
```html
<mz-dropdown-menu :data="list">
  <mz-button>下拉菜单</mz-button>
</mz-dropdown-menu>

<script>
export default {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1', prefixIcon: 'american-football-outline' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3', suffixIcon: 'boat-outline' },
      ]
    }
  }
}
</script>
```
:::

### 自定义菜单元素

:::demo 使用作用域插槽`item`，进行自定义布局。
```html
<mz-dropdown-menu :data="list">
  <mz-button>下拉菜单</mz-button>
  <template #item="{item, index}">
    <div style="padding:10px">
      {{index}}. {{item.title}}
    </div>
  </template>
</mz-dropdown-menu>

<script>
export default {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1', prefixIcon: 'american-football-outline' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3', suffixIcon: 'boat-outline' },
      ]
    }
  }
}
</script>
```
:::

### 行为事件

:::demo `action`事件仅在点击菜单元素没有被禁用的时候传出。`select`事件在点击菜单的时候传出。
```html
<mz-dropdown-menu :data="list" 
  @action="action" @select="select">
  <mz-button color="primary">下拉菜单</mz-button>
</mz-dropdown-menu>
<div class="demo-font-size-14">有效行为(action)：{{actionItem}}</div>
<div class="demo-font-size-14">点击选择(select)：{{selectItem}}</div>

<script>
export default {
  data() {
    return {
      list: [
        { title: '选项1', value: 'option1' },
        { title: '选项2', value: 'option2', disabled: true },
        { title: '选项3', value: 'option3' },
      ],
      selectItem:'',
      actionItem:'',
    }
  },

  methods: {
    action(value, item) {
      this.actionItem = item
    },
    select(value, item) {
      this.selectItem = item
    }
  }
}
</script>
```
:::


### API

#### 属性

该组件属性与[Dropdown](component-dropdown#shu-xing)一致还有以下属性:

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|list|菜单列表|MenuItem||[]|
|size|尺寸|String| small / medium / large ||
**MenuItem**

- value \<String> 行为值
- title \<String> 标题
- text \<String> 文本
- class \<Any> 自定义class
- disabled \<Boolean> 是否禁用
- prefixIcon \<String> 前缀图标
- suffixIcon \<String> 后缀图标

#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| action | 行为事件 | (value:any, item:MenuItem) |
| select | 选择事件 | (value:any, item:MenuItem, disabled:boolean) |

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|下拉菜单引用对象||
|header|下拉框内容的顶部||
|footer|下拉框内容的尾部||
|item|下拉菜单的元素|{item:MenuItem, index:number}|