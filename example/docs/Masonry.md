## Masonry 瀑布流布局

简单快速实现瀑布流布局效果。

### 基本用法
:::demo masonry的`mode`属性控制实现方式，默认采用flex布局实现。可选值:`flex`,`grid`,`column-count`。
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
