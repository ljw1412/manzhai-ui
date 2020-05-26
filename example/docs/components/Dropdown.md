## Dropdown 下拉框

点击元素，弹出下拉框。

### 基础用法

默认插槽为下拉框触发者，content插槽作为下拉框的内容。

此组件只会将下拉框与触发者进行绑定，而不会额外渲染 DOM 元素。

:::demo
```html
<mz-dropdown>
  <span class="username">用户</span>
  <mz-list slot="content" style="width:120px;" size="small" clickable>
    <mz-list-item title="个人中心"></mz-list-item>
    <mz-list-item title="消息"></mz-list-item>
    <mz-list-item title="登出"></mz-list-item>
  </mz-list>
</mz-dropdown>

<style>
.username {
  cursor: pointer;
  padding:2px 6px;
}

.username:hover {
  background-color: rgba(130, 130, 130, 0.3);
}
</style>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|visible/v-model|当前显示状态|Boolean|||
|placement|位置|String|top / top-start / top-end / right / right-start / right-end / bottom / bottom-start / bottom-end / left / left-start / left-end / auto / auto-start / auto-end|'bottom'|
|animation|过渡动画的名称|String|shift-away / shift-away-subtle / shift-away-extreme / shift-toward / shift-toward-subtle / shift-toward-extreme / scale / scale-subtle / scale-extreme / perspective / perspective-subtle / perspective-extreme|'shift-away'|
|arrow|是否显示箭头或箭头的样式|Boolean / String / SVGElement||false|
|maxWidth|最大宽度|Number / String|'none'|'none'|
|offset|偏移|Array|[skidding, distance]|[0, 10]|
|appendTo|添加至父级|String / Element|'parent' / `(CSS selector)` |document.body|
|theme|主题|String|reverse / same / light / light-border / material / translucent|'same'|
|zIndex|同原生层级|Number|||


**此组件插槽与事件与组件[Tooltip](component-tooltip#cha-cao)一致**