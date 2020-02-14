## Progress 进度条

用于展示操作进度。

### 基础用法
:::demo 
```html
<mz-progress v-model="value"></mz-progress>
<mz-progress v-model="value" color="var(--color-success)"></mz-progress>
<mz-progress v-model="value" color="var(--color-warning)"></mz-progress>
<mz-progress v-model="value" color="var(--color-danger)"></mz-progress>
<mz-progress v-model="value" color="#6200ea"></mz-progress>
<div style="margin-top: 10px;">
  <mz-button @click="valueStepBy(-10)">-</mz-button>
  <span style="padding:0 10px;">{{value}}%</span>
  <mz-button @click="valueStepBy(10)">+</mz-button>
</div>


<script>
export default {
  data() {
    return {
      value: 10
    }
  },

  methods: {
    valueStepBy(step){
      if(this.value + step > 100 || this.value + step < 0) return
      this.value += step
    }
  }
}
</script>
```
:::


### 缓冲

显示缓存进度的进度条。

:::demo `buffer`属性来控制当前缓存进度。
```html
<mz-progress v-model="value" :buffer="buffer"></mz-progress>
<mz-progress v-model="value" :buffer="buffer" color="var(--color-success)"></mz-progress>
<mz-progress v-model="value" :buffer="buffer" color="var(--color-warning)"></mz-progress>
<mz-progress v-model="value" :buffer="buffer" color="var(--color-danger)"></mz-progress>
<mz-progress v-model="value" :buffer="buffer" color="#6200ea"></mz-progress>

<script>
export default {
  data() {
    return {
      value: 15,
      buffer: 20
    }
  }
}
</script>
```
:::

### 不确定进度

使用动画效果表示不确定当前进度。

:::demo `indeterminate`属性来控制进度条的不确定状态，默认为 false。
```html
<mz-progress indeterminate></mz-progress>
<mz-progress indeterminate color="var(--color-success)"></mz-progress>
<mz-progress indeterminate color="var(--color-warning)"></mz-progress>
<mz-progress indeterminate color="var(--color-danger)"></mz-progress>
<mz-progress indeterminate color="#6200ea"></mz-progress>
```
:::


### 圆角

带圆角样式的进度条。

:::demo `round`属性来控制进度条的圆角状态，默认为 false。
```html
<mz-progress v-model="value" :buffer="buffer" round></mz-progress>
<mz-progress v-model="value" indeterminate round color="var(--color-success)"></mz-progress>

<script>
export default {
  data() {
    return {
      value: 15,
      buffer: 20
    }
  }
}
</script>
```
:::


### 自定义颜色

:::demo `color`控制主进度的颜色，默认值主题色。`buffer-color`控制缓存进度的颜色，`background-color`控制背景的颜色。当`buffer-color`、`background-color`值不存在时，会采用主进度的颜色带上0.3透明度。
```html
<mz-progress v-model="value"
  :buffer="buffer"
  color="#6200ea"
  buffer-color="var(--color-warning)"
  background-color="var(--color-danger)"></mz-progress>

<script>
export default {
  data() {
    return {
      value: 15,
      buffer: 30
    }
  }
}
</script>
```
:::