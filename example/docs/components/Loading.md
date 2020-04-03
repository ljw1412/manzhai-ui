## Loading 加载

用于页面和区块的加载中状态。

### 基础用法

以单纯的加载图标模式显示。

:::demo
```html
<mz-loading v-for="i of 7" :mode="i"></mz-loading>
```
:::


### 作为块的加载

以单纯的加载图标模式显示。

:::demo
```html
<mz-loading :loading="true">
  <div class="height-400">我是内容</div>
</mz-loading>
```
:::