## Button 按钮

实现常用的按钮功能。

### 基本用法

基础按钮的用法。

:::demo 使用`type`、`outlined`、`flat`、`round`、`circle`、`icon`属性来定义 Button 的样式。<br>你可以通过`disabled`属性来修改按钮的禁用状态。

```html
<div>
  <mz-button>默认按钮</mz-button>
  <mz-button type="primary">主要按钮</mz-button>
  <mz-button type="success">成功按钮</mz-button>
  <mz-button type="warning">警告按钮</mz-button>
  <mz-button type="danger">危险按钮</mz-button>
  <mz-button disabled>禁用按钮</mz-button>
</div>

<div>
  <mz-button outlined>线条按钮</mz-button>
  <mz-button type="primary" outlined>主要按钮</mz-button>
  <mz-button type="success" outlined>成功按钮</mz-button>
  <mz-button type="warning" outlined>警告按钮</mz-button>
  <mz-button type="danger" outlined>危险按钮</mz-button>
  <mz-button disabled outlined>禁用按钮</mz-button>
</div>

<div>
  <mz-button flat>扁平按钮</mz-button>
  <mz-button type="primary" flat>主要按钮</mz-button>
  <mz-button type="success" flat>成功按钮</mz-button>
  <mz-button type="warning" flat>警告按钮</mz-button>
  <mz-button type="danger" flat>危险按钮</mz-button>
  <mz-button disabled flat>禁用按钮</mz-button>
</div>

<div>
  <mz-button round>圆角按钮</mz-button>
  <mz-button type="primary" round>主要按钮</mz-button>
  <mz-button type="success" round>成功按钮</mz-button>
  <mz-button type="warning" round>警告按钮</mz-button>
  <mz-button type="danger" round>危险按钮</mz-button>
  <mz-button disabled round>禁用按钮</mz-button>
</div>

<div>
  <mz-button circle icon>
    <mz-icon name="md-alarm"size="20px"></mz-icon>
  </mz-button>
  <mz-button type="primary" circle icon>
    <mz-icon name="md-alarm"size="20px"></mz-icon>
  </mz-button>
  <mz-button type="success" circle icon>
    <mz-icon name="md-alarm"size="20px"></mz-icon>
  </mz-button>
  <mz-button type="warning" circle icon>
    <mz-icon name="md-alarm"size="20px"></mz-icon>
  </mz-button>
  <mz-button type="danger" circle icon>
    <mz-icon name="md-alarm"size="20px"></mz-icon>
  </mz-button>
  <mz-button disabled circle icon>
    <mz-icon name="md-alarm"size="20px"></mz-icon>
  </mz-button>
</div>

<script>
export default {
  data() {
    return {
      colorTypeList: ['', 'primary', 'success', 'warning', 'danger']
    }
  }
}
</script>
```
:::

### 按钮尺寸

我们为按钮提供了3种大小尺寸，根据场景选择合适的按钮尺寸。

:::demo 尺寸有`small`、`(默认)`、`large`，通过设置size属性来配置它们。
```html
<div>
  <mz-button type="primary" size="large">默认按钮</mz-button>
  <mz-button type="primary">默认按钮</mz-button>
  <mz-button type="primary" size="small">默认按钮</mz-button>
</div>

<div>
  <mz-button type="primary" outlined size="large">线条按钮</mz-button>
  <mz-button type="primary" outlined>线条按钮</mz-button>
  <mz-button type="primary" outlined size="small">线条按钮</mz-button>
</div>

<div>
  <mz-button type="primary" flat size="large">扁平按钮</mz-button>
  <mz-button type="primary" flat>扁平按钮</mz-button>
  <mz-button type="primary" flat size="small">扁平按钮</mz-button>
</div>

<div>
  <mz-button type="primary" round size="large">圆角按钮</mz-button>
  <mz-button type="primary" round>圆角按钮</mz-button>
  <mz-button type="primary" round size="small">圆角按钮</mz-button>
</div>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
| type | 类型 | String | 默认 / primary / success / warning / danger | - |
| size | 尺寸 | String | 默认 / large / small   | - |
| disabled | 是否禁用状态 | Boolean | | |
| icon | 是否图标状态	 | Boolean | | |
| ripple | 点击涟漪效果 | Boolean / Object | | true |
| circle | 是否圆形按钮	 | Boolean | | |
| outlined | 是否线条按钮	 | Boolean | | |
| flat | 是否扁平按钮	 | Boolean | | |
| round | 是否圆角按钮	 | Boolean | | |
| native-type | 原生 type 属性 | String | button / submit / reset | 'button' |
| font-color | 文字颜色 | String | | |
| color | 背景颜色 | String | | |
| border-color | 边框颜色 | String | | |

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|按钮的内容||