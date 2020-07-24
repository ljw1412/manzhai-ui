# 简介

:::vue
```html
<mz-snackbar color="warning" text-color="#333">
  <div>"响应式"、"移动设备优先"将在未来版本或者项目重构的时候纳入设计中。</div>
  <div>因为`manzhai-ui`最初设计的时候限定只在pc端使用。</div>
</mz-snackbar>
```
:::

<br />

<p style="font-size:24px">Manzhai-ui预设了一套类名语义化的CSS。</p>

## 引入方法

### 默认引入
```js
// 在项目的入口文件
// 其中包含了组件样式和预设的语义化样式
import 'manzhai-ui/lib/manzhai-ui.css';
```

### 以Scss引入(可以自定义主题)
创建自己配置的Scss变量文件`variables.scss`。
```scss
// 覆盖默认important，默认值true。
$enable-important-utilities: false;
// 使用css-variables，默认值false。
$enable-css-variables: false;

// 覆盖默认颜色变量
// 具体相关变量名请查看，"manzhai-ui/src/styles/scss/variables/*.scss"
$primary: #3f51b5;
$secondary: $gray-600;
$success: #43a047;
$warning: $yellow;
$danger: #ed4014;
$light: $gray-100;
$dark: $gray-800;
```

然后创建组件ui样式文件`manzhai-ui.scss`。
```scss
// 引入自定义变量文件来覆盖默认值
@import 'variables.scss';

// manzhai-ui 所有样式的入口
@import '~manzhai-ui/src/styles/index.scss';
```

之后创建开发时使用的功能库`manzhai.scss`。
```scss
// 引入自定义变量文件来覆盖默认值
@import 'variables.scss';

@import '~manzhai-ui/src/styles/variables.scss';

// 后面可以引用自己定义的一些scss function、mixins文件
```

最后在项目的入口文件引入`manzhai-ui.scss`。
```js
import 'manzhai-ui.scss';
```

在你开发的页面或组件中引入`manzhai.scss`，即可使用所有manzhai-ui的变量、function、mixins。

```html
<template>
  <div class="content"></div>
</template>
<script>...</script>
<style>
@import 'manzhai.scss';
.content{
  color: $body-color;
  background-color: $body-bg;
}
</style>
```