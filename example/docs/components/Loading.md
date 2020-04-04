## Loading 加载

用于页面和区块的加载中状态。

### 基础用法

以单纯的加载图标模式显示。

:::demo
```html
<mz-loading v-for="i of 7" :mode="i" :key="i"></mz-loading>
```
:::


### 作为块的加载

有内容嵌套再内部。

:::demo `loading`属性控制当前是否为加载状态。
```html
<mz-switch v-model="loading"></mz-switch>
<mz-loading :loading="loading">
  <div class="height-200">我是内容</div>
</mz-loading>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
</script>
```
:::

### 自定义文案

自定义加载时的文案。

:::demo
```html
<mz-switch v-model="loading"></mz-switch>
<mz-loading :loading="loading" tip="正在加载中">
  <div class="height-200">我是内容</div>
</mz-loading>

<script>
export default {
  data() {
    return {
      loading: false
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
|type|加载图标的类型|String|`four-color`|'four-color'|
|mode|加载图标的类型下的多种效果|Number|`four-color`:`1-7`|1|
|loading|是否为加载状态|Boolean|||
|inline|是否为行内元素|Boolean|||
|tip|加载时的文案|String|||
|tipColor|文案的颜色|String|||
|maskColor|遮罩的颜色|String|||


#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|内容||
