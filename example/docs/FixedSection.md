## FixedSection 固定项

一个固定块或者与滚动联动的粘性效果。

### 基础用法
:::demo `fixed`属性控制是否固定。
```html
<mz-button @click="fixed = !fixed">{{fixed?'关闭固定':'开启固定'}}</mz-button>
<mz-fixed-section :fixed="fixed" top="200px" left="300px">我是固定的块</mz-fixed-section>

<script>
export default {
  data() {
    return {
      fixed: false
    }
  }
}
</script>
```
:::

### 粘性块
:::demo `sticky`属性控制是否为粘性效果，`placeholder`属性控制在固定时是否有占位空间来撑开原始位置的高度。
```html
<div id="sticky-scroll-wrapper" style="height:300px;overflow-y:scroll;">
  <div style="height:1500px;background: linear-gradient(45deg, blue,orange, yellow);">
    <div style="height:100px;"></div>
    <mz-fixed-section sticky placeholder
      container="#sticky-scroll-wrapper"
      :section-style="{'background-color':'green',padding:'15px'}">我是固定的块</mz-fixed-section>
    <div style="height:200px;"></div>
    <mz-fixed-section sticky 
      container="#sticky-scroll-wrapper"
      :offsetTop="100"
      :section-style="{'background-color':'red',padding:'15px'}">我是固定的块距离顶部100px时固定</mz-fixed-section>
  </div>
</div>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
```
:::