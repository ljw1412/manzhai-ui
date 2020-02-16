## Carousel 轮播

在一个容器内循环播放内容。

### 基本用法

默认水平方向进行定时轮播。

:::demo `height`属性控制轮播组件的高度，默认值 100%。
```html
<mz-carousel height="400px">
  <mz-carousel-item style="background-color:var(--color-primary)"></mz-carousel-item>
  <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
  <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
  <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
</mz-carousel>
```
:::

### 垂直轮播

垂直方向的轮播。

:::demo `vertical`属性控制轮播方式是否垂直。
```html
<mz-carousel vertical height="400px">
  <mz-carousel-item style="background-color:var(--color-primary)"></mz-carousel-item>
  <mz-carousel-item style="background-color:var(--color-success)"></mz-carousel-item>
  <mz-carousel-item style="background-color:var(--color-warning)"></mz-carousel-item>
  <mz-carousel-item style="background-color:var(--color-danger)"></mz-carousel-item>
</mz-carousel>
```
:::