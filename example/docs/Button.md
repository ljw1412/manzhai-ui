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