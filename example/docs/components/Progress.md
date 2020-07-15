## Progress 进度条

用于展示操作进度。

### 基础用法
:::demo 
```html
<mz-progress v-model="value"></mz-progress>
<mz-progress v-model="value" color="#43a047"></mz-progress>
<mz-progress v-model="value" color="#ffc107"></mz-progress>
<mz-progress v-model="value" color="#ed4014"></mz-progress>
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
<mz-progress v-model="value" :buffer="buffer" color="#43a047"></mz-progress>
<mz-progress v-model="value" :buffer="buffer" color="#ffc107"></mz-progress>
<mz-progress v-model="value" :buffer="buffer" color="#ed4014"></mz-progress>
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
<mz-progress indeterminate color="#43a047"></mz-progress>
<mz-progress indeterminate color="#ffc107"></mz-progress>
<mz-progress indeterminate color="#ed4014"></mz-progress>
<mz-progress indeterminate color="#6200ea"></mz-progress>
```
:::

### 不确定进度(交替)

可以用来表示来回的等待状态。
:::demo `alternate`属性来控制进度条的不确定状态的动画为交替，默认为 false，且只在`indeterminate`为true时有效。
```html
<mz-progress indeterminate alternate></mz-progress>
<mz-progress indeterminate alternate color="#43a047"></mz-progress>
<mz-progress indeterminate alternate color="#ffc107"></mz-progress>
<mz-progress indeterminate alternate color="#ed4014"></mz-progress>
<mz-progress indeterminate alternate color="#6200ea"></mz-progress>
```
:::



### 圆角

带圆角样式的进度条。

:::demo `rounded`属性来控制进度条的圆角状态，默认为 false。
```html
<mz-progress v-model="value" :buffer="buffer" rounded></mz-progress>
<mz-progress v-model="value" indeterminate rounded color="#43a047"></mz-progress>

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

用户可以根据自己的需求自定义进度条的颜色。

:::demo `color`控制主进度的颜色，默认值主题色。`buffer-color`控制缓存进度的颜色，`background-color`控制背景的颜色。当`buffer-color`、`background-color`值不存在时，会采用主进度的颜色带上0.3透明度。
```html
<mz-progress v-model="value"
  :buffer="buffer"
  color="#6200ea"
  buffer-color="#ffc107"
  background-color="#ed4014"></mz-progress>

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

### 斑马纹

:::demo `striped`属性来控制进度条是否用斑马纹效果，`striped-animation`属性来控制进度条是否有动画效果的斑马纹。
```html
<mz-progress v-model="value" 
  :buffer="buffer" :stroke-width="12" striped></mz-progress>
<mz-progress v-model="value" 
  :buffer="buffer" :stroke-width="12" striped-animation></mz-progress>
<mz-progress v-model="value" 
  color="#43a047" :stroke-width="12" striped></mz-progress>
<mz-progress v-model="value" 
  color="#43a047" :stroke-width="12" striped-animation></mz-progress>

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

### API

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|v-model/value|当前进度|Number||0|
|max|最大值|Number||100|
|buffer|缓冲进度|Number||0|
|stroke-width|进度条的宽度|Number||6|
|color|进度条的颜色|String|||
|buffer-color|缓存条的颜色|String|||
|background-color|背景颜色|String|||
|indeterminate|是否为不确定状态|Boolean|||
|alternate|是否动画交替，仅indeterminate为true时有效|Boolean|||
|rounded|是否为圆角|Boolean|||
|striped|是否有斑马纹|Boolean|||
|striped-animation|是否有动画效果的斑马纹|Boolean|||