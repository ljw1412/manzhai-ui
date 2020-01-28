## Scrollbar 滚动条

用HTML实现原生滚动条效果。

### 基本用法

:::demo
```html
<mz-scrollbar style="height:200px;">
  <div style="white-space: nowrap;">
    <span v-for="i of 10" :key="i">测试滚动条测试滚动条测试滚动条测试滚动条</span>
  </div>
  <p v-for="i of 10" :key="i">段落{{i}}</p>
</mz-scrollbar>
```
:::

### Api

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|bar-size|条的大小|String||'15px'|