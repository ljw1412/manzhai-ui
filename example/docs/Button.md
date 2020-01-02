## Button 按钮

实现常用的按钮功能。

### 基本用法

基础按钮的用法。

:::demo 你可以通过`disabled`(`Boolean`)属性来修改按钮的禁用状态

```html
<div>
  <mz-button>默认按钮</mz-button>
  <mz-button type="primary">主要按钮</mz-button>
  <mz-button type="success">成功按钮</mz-button>
  <mz-button type="warning">警告按钮</mz-button>
  <mz-button type="danger">危险按钮</mz-button>
  <mz-button disabled>禁用按钮</mz-button>
</div>
```

:::

### 线条按钮

:::demo 你可以通过`outlined`(`Boolean`)属性来修改按钮为线条样式

```html
<div>
  <mz-button v-for="type of colorTypeList" :key="type" :type="type" outlined
    >线条按钮</mz-button
  >
  <mz-button outlined disabled>禁用按钮</mz-button>
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

### 扁平按钮

:::demo 你可以通过`flat`(`Boolean`)属性来修改按钮为扁平样式

```html
<div>
  <mz-button v-for="type of colorTypeList" :key="type" :type="type" flat
    >测试按钮</mz-button
  >
  <mz-button flat disabled>禁用按钮</mz-button>
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

### 圆角按钮

:::demo 你可以通过`round`(`Boolean`)属性来修改按钮为圆角样式

```html
<div>
  <mz-button v-for="type of colorTypeList" :key="type" :type="type" round
    >测试按钮</mz-button
  >
  <mz-button round disabled>禁用按钮</mz-button>
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
