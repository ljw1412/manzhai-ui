## Masonry 瀑布流布局

简单快速实现瀑布流布局效果。

### 基本用法
:::demo masonry的`gutter`属性控制块与块之间的间隔。
```html
<mz-masonry :gutter="5">
  <mz-masonry-item v-for="index of 22"
    :key="index"
    :style="{
      height: randomNumber(100, 50) + 'px',
      'background-color': randomColor()
    }">内容块{{index}}</mz-masonry-item>
</mz-masonry>

<script>
export default {
  methods:{
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=>this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    }
  }
}
</script>
```
:::

### 用column-count实现
:::demo masonry的`mode`属性控制实现方式，默认采用flex布局实现。可选值:`flex`,`column-count`。
```html
<mz-masonry :gutter="5" mode="column-count">
  <mz-masonry-item v-for="index of 22"
    :key="index"
    :style="{
      height: randomNumber(100, 50) + 'px',
      'background-color': randomColor()
    }">内容块{{index}}</mz-masonry-item>
</mz-masonry>

<script>
export default {
  methods:{
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=>this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    }
  }
}
</script>
```
:::

### 瀑布流条数
:::demo `lineCount`实现控制瀑布流条数，默认为 4
```html
<div style="margin-bottom:10px;">
  <mz-button outlined
    type="primary"
    :disabled="lineCount <= 1"
    @click="lineCountBy(-1)">-</mz-button>
  {{lineCount}}
  <mz-button outlined
    type="primary"
    :disabled="lineCount >= 8" 
    @click="lineCountBy(1)">+</mz-button>
</div>
<mz-masonry :gutter="5" :lineCount="lineCount">
  <mz-masonry-item v-for="index of 22"
    :key="index"
    :style="{
      height: randomNumber(100, 50) + 'px',
      'background-color': randomColor()
    }">内容块{{index}}</mz-masonry-item>
</mz-masonry>

<script>
export default {
  data() {
    return {
      lineCount: 4
    }
  },

  methods: {
    randomNumber(max, min = 0){
      return parseInt(Math.random() * (max - min) + min)
    },

    randomColor(){
      const rgb = [0, 0, 0].map(item=>this.randomNumber(255))
      return `rgb( ${rgb.join(', ')} )`
    },

    lineCountBy(step){
      this.lineCount += step
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
|mode|模式|String|flex / column-count|'flex'|
|lineCount|条数|Number||4|
|gutter|间距|Number|||