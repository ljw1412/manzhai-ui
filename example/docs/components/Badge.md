## Badge 徽标数

主要用于提醒用户点击的角标。

### 基本用法
:::demo `count`表示数量，当其为 0 时隐藏。`color`、`textColor`来分别控制背景颜色、文字颜色。
```html
<mz-badge :count="10">
  <mz-icon name="md-notifications" :size="24"></mz-icon>
</mz-badge>
<mz-badge :count="10" color="blue">
  <mz-icon name="md-notifications" :size="24"></mz-icon>
</mz-badge>
<mz-badge :count="8">
  <mz-button color="primary" size="large">消息</mz-button>
</mz-badge>
<mz-badge :count="8" textColor="orange">
  <mz-button color="primary" size="large">消息</mz-button>
</mz-badge>
```
:::

### 封顶数字
:::demo 通过设置`overflow-count`属性设置一个封顶值，当超过时，会显示`${overflowCount}+`，默认值`99`
```html
<mz-badge :count="100">
  <mz-icon name="md-notifications" :size="24"></mz-icon>
</mz-badge>
<mz-badge :count="100" :overflow-count="9">
  <mz-icon name="md-notifications" :size="24"></mz-icon>
</mz-badge>
```
:::

### 小红点

没有具体的数字。

:::demo `dot`属性控制是否以小红点显示。当`count`为 0 时，徽标将隐藏。
```html
<mz-badge :count="100" dot :offset="[5, 5]">
  <mz-icon name="md-notifications" :size="24"></mz-icon>
</mz-badge>
<mz-badge :count="8" dot>
  <mz-button color="primary" size="large">消息</mz-button>
</mz-badge>
```
:::

### 单独使用

不包裹任何元素即是独立使用。

:::demo 
```html
<mz-badge :count="10"></mz-badge>
<mz-badge :count="10" dot></mz-badge>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|count|显示的数字|Number|||
|overflowCount|封顶的数字值|Number||99|
|dot|小红点，如需隐藏 dot ，需要设置count为 0|Boolean||false|
|offset|设置状态点的位置偏移，格式为 [x, y]|Array||[0,0]|
|color|背景颜色|String|||
|textColor|文字颜色|String|||


### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|包裹的内容||

