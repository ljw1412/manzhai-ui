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
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@/static/image-star.jpg')
      ]
    }
  }
}
</script>
```
:::

### 缩略图

有缩略图列表，支持按图切换。

:::demo
```html
<mz-button @click="visible = true">预览</mz-button>
<mz-image-preview thumbnail :visible.sync="visible"
  :images="images"></mz-image-preview>

<script>
export default {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@/static/image-star.jpg')
      ]
    }
  }
}
</script>
```
:::

### 可播放

能够定时播放。

:::demo
```html
<mz-button @click="visible = true">预览</mz-button>
<mz-image-preview playable :visible.sync="visible"
  :images="images"></mz-image-preview>

<script>
export default {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@/static/image-star.jpg')
      ]
    }
  }
}
</script>
```
:::