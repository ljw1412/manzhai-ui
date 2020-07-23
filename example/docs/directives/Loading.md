## Loading 加载

加载数据时显示动效。

**如果出现样式问题，请使用[MzLoading组件](component-loading)。**


### 基础用法
:::demo `v-loading`指令控制加载的状态控制，类型`Boolean`。
```html
<mz-button color="primary" @click="load">加载</mz-button>

<div v-loading="loading">
  <p>欢迎使用加载过渡指令</p>
  <p>
    <span>当前时间：</span>
    <span v-if="!loading">{{new Date()}}</span>
  </p>
</div>

<script>
export default {
  data() {
    return {
      loading: false,
      timer: null
    }
  },

  methods: {
    load() {
      this.loading = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  },

  created() {
    this.load()
  }
}
</script>
```
:::

### 参数配置
:::demo 以下是所有可以配置的属性，它们的可选值与MzLoading对应属性值一致。唯一区别这些属性值都是`String`类型。
```html
<span class="fs-14">加载开关：</span>
<mz-switch v-model="loading"></mz-switch>

<div v-loading="loading"
  mz-loading-text="数据加载中"
  mz-loading-mode="2"
  mz-loading-type="four-color"
  mz-loading-text-color="#ffffff"
  mz-loading-background="rgba(0,0,0,0.8)"
  style="min-height: 200px;">
  <mz-masonry v-if="!loading" :gutter="5">
    <mz-masonry-item v-for="index of 20"
      :key="index"
      :style="{
        height: '60px',
        border: '1px solid #ccc'
      }">内容块{{index}}</mz-masonry-item>
  </mz-masonry>
</div>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>
```
:::