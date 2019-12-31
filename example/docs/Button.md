## Button 按钮

实现常用的按钮功能。

### 基本用法

基础按钮的用法。

:::demo 按钮的基础

```html
<template>
  <mz-button>默认按钮</mz-button>
  <mz-button type="primary">主要按钮</mz-button>
  <mz-button type="success">成功按钮</mz-button>
  <mz-button type="warning">警告按钮</mz-button>
  <mz-button type="danger">危险按钮</mz-button>
</template>
```

:::

### 禁用状态

:::demo 你可以通过`disabled`(`Boolean`)属性来修改按钮的禁用状态

```html
<template>
  <mz-button disabled>默认按钮</mz-button>
</template>
```

:::
