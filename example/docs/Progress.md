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
:::demo 
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