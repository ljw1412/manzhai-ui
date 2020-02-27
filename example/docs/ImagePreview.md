## ImagePreview 图片预览

以页面全屏的形式预览图片。

### 基础用法

:::demo
```html
<mz-button @click="visible = true">预览</mz-button>
<mz-image-preview :visible.sync="visible"
  :images="images"></mz-image-preview>

<script>
export default {
  data (){
    return {
      visible: false,
      images: [require('@/static/image-star.jpg')]
    }
  }
}
</script>
```
:::