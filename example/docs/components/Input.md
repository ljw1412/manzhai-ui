## Input 输入框

通过鼠标或键盘输入内容。

### 基础用法
:::demo
```html
<mz-input v-model="value" placeholder="请输入文字"></mz-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::


### 圆角
:::demo `rounded`属性控制是否使用圆角显示。
```html
<mz-input v-model="value" placeholder="请输入文字" rounded>
</mz-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 不同大小

提供了3种输入框大小。

:::demo `size`属性控制输入框的大小，可选值`small`、`large`。
```html
<mz-input v-model="value" placeholder="小" size="small">
</mz-input>
<mz-input v-model="value" placeholder="中">
</mz-input>
<mz-input v-model="value" placeholder="大" size="large">
</mz-input>

<mz-input v-model="value" placeholder="小(圆角)" rounded size="small">
</mz-input>
<mz-input v-model="value" placeholder="中(圆角)" rounded>
</mz-input>
<mz-input v-model="value" placeholder="大(圆角)" rounded size="large">
</mz-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 前后置内容
:::demo `prefix`、`suffix`属性添加字符型的前置内容。你也可以使用同名插槽进行更多的扩展。
```html
<mz-input v-model="username" placeholder="中">
  <mz-icon name="md-person" slot="prefix"></mz-icon>
</mz-input>

<mz-input v-model="value" placeholder="中" prefix="￥"
suffix="RMB">
</mz-input>

<script>
export default {
  data() {
    return {
      username:'',
      value: ''
    }
  }
}
</script>
```
:::


### 禁用
:::demo `disabled`属性控制是否禁用。
```html
<mz-input v-model="value" disabled></mz-input>
<mz-input v-model="value" disabled rounded></mz-input>

<script>
export default {
  data() {
    return {
      value: '禁用的输入框'
    }
  }
}
</script>
```
:::