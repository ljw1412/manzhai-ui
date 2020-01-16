## FilterSection 筛选项

用于筛选条件的选择。

### 基础用法

:::demo `label`用来描述选择项的类型标签。
```html
<div class="demo-font-size-14">当前值：{{ value }}</div>
<mz-filter-section v-model="value" label="产地：">
  <mz-filter-section-item v-for="country of countries"
    :key="country.value"
    :value="country.value">{{ country.label }}</mz-filter-section-item>
</mz-filter-section>

<script>
export default {
  data() {
    return {
      value: 'All',
      countries: [
        { label: '全部', value: 'All' },
        { label: '中国', value: 'China' },
        { label: '日本', value: 'Janpan' },
        { label: '新加坡', value: 'Singapore' },
        { label: '美国', value: 'America' },
        { label: '英国', value: 'England' },
      ]
    }
  }
}
</script>
```
:::

### 线条效果

:::demo `outlined`用来控制是否以边框模式显示选中的效果。
```html
<div class="demo-font-size-14">当前值：{{value}}</div>
<mz-filter-section v-model="value" label="漫画类型" outlined>
  <mz-filter-section-item v-for="type of typeList"
    :key="type"
    :value="type"
    :label="type"></mz-filter-section-item>
</mz-filter-section>

<script>
export default {
  data() {
    return {
      value: '全部',
      typeList: ["全部", "爆笑", "热血", "冒险", "科幻", "魔幻", "玄幻", "校园", "推理", "萌系", "穿越", "后宫", "都市", "恋爱", "武侠", "格斗", "战争", "历史", "同人", "竞技", "励志", "治愈", "机甲", "纯爱", "美食", "血腥", "僵尸", "恶搞", "虐心", "生活", "动作", "惊险", "唯美", "震撼", "复仇", "侦探", "其它", "脑洞", "奇幻", "宫斗", "运动", "青春", "灵异", "古风", "权谋", "节操", "明星", "暗黑", "社会", "浪漫", "栏目"]
    }
  }
}
</script>
```
:::

### 对齐方式

根据具体目标和制约因素，选择最佳的标签对齐方式。

:::demo `label-position`用来控制选择项的标签的位置，可选值为`top`、`left`、`right`。属性值`label-width`控制标签的宽度。
```html
<div style="margin-bottom:10px">
  <span>标签位置：</span>
  <mz-radio-group v-model="position" name="position">
    <mz-radio-button value="top" border>top</mz-radio-button>
    <mz-radio-button value="left" border>left</mz-radio-button>
    <mz-radio-button value="right" border>right</mz-radio-button>
  </mz-radio-group>
</div>
<mz-filter-section v-model="value" 
  label="上线月份" :label-position="position" label-width="100px">
  <mz-filter-section-item 
    v-for="i of 12" :key="i" :value="i">{{i}}月</mz-filter-section-item>
</mz-filter-section>

<script>
export default {
  data() {
    return {
      value: '',
      position: 'top' 
    }
  }
}
</script>
```
:::

### 多选模式

可以选择多个选择项。

:::demo `multiple`用来控制是不是多选。
```html
<div class="demo-font-size-14">当前值：{{value}}</div>
<mz-filter-section v-model="value" label="类型1：" multiple>
  <mz-filter-section-item v-for="i of 10"
    :key="i"
    :value="i">选项{{i}}</mz-filter-section-item>
</mz-filter-section>

<script>
export default {
  data() {
    return { value: [] }
  }
}
</script>
```
:::

### 筛选项组

有多个筛选项组成的选项组，由父级进行结果管理。

:::demo filterSection的`name`属性是该选项组的中筛选项的唯一标识。
```html
<div class="demo-font-size-14">当前值：{{groupValue}}</div>
<mz-filter-section-group v-model="groupValue">
  <mz-filter-section name="type1"
    label="类型1(name=type1)：">
    <mz-filter-section-item v-for="i of 10"
      :key="i"
      :value="i">选项{{i}}</mz-filter-section-item>
  </mz-filter-section>
  <mz-filter-section label="类型2(name=type2)："
    name="type2"
    multiple>
    <mz-filter-section-item v-for="i of 10"
      :key="i"
      :value="i">选项{{i}}</mz-filter-section-item>
  </mz-filter-section>
</mz-filter-section-group>

<script>
export default {
  data() {
    return { groupValue: null }
  }
}
</script>
```
:::


### 自定义选中效果
:::demo filterSectionItem 的`custom`属性如果是true，可以关闭默认的选中效果。通过`slot-scope`可以获得当前选择项的选中状态情况。
```html
<div class="demo-font-size-14">当前值：{{value}}</div>
<mz-filter-section v-model="value" label="类型1：" custom>
  <mz-filter-section-item custom
    v-for="i of 10" :key="i" :value="i">
    <div slot-scope="{ checked }"
      :class="{'is-item-checked':checked}">选项{{i}}</div>
  </mz-filter-section-item>
</mz-filter-section>

<script>
export default {
  data() {
    return { value: 1 }
  }
}
</script>

<style lang="scss">
.is-item-checked{
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: green;
  }
}
</style>
```
:::

### FilterSection API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value/v-model|绑定值|String|||
|label|选择项标签|String|||
|label-position|标签位置|String|top/left/right|'top'|
|label-width|标签宽度|String|||
|outlined|是否边框模式|Boolean|||
|multiple|是否多选|Boolean|||
|name|(在group下必填)选择项的名称(唯一)|String|||

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|选择项的列表容器||
|label|选择项的标签插槽||

### FilterSectionItem API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value|(必填)选项的值|any|||
|label|选项显示的标签|String|||
|label-style|标签的样式|any|||
|outlined|是否边框模式|Boolean|||
|custom|是否自定义选中|Boolean|||
|disabled|是否禁用|Boolean|||

#### 作用域插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|选择项的标签|{ checked }|

### FilterSectionGroup API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value/v-model|绑定值|String|||
|auto-fix-value|是否自动修复值|Boolean|||

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|选项组的列表容器||