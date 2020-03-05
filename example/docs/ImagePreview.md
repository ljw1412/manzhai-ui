## ImagePreview 图片预览

以页面全屏的形式预览图片。

### 基础用法

:::demo `images`传递图片列表。
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

:::demo `thumbnail`控制是否显示缩略图。
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

:::demo `playable`控制是否能够自动轮播。
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

### 循环预览

最后一张的下一张为第一张。

:::demo `loop`控制是否能够循环切换。
```html
<mz-button @click="visible = true">预览</mz-button>
<mz-image-preview loop :visible.sync="visible"
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

### 图片操作栏

对图片进行缩放的操作栏。

:::demo `actionbar`控制是否显示操作栏。
```html
<mz-button @click="visible = true">预览</mz-button>
<mz-image-preview actionbar :visible.sync="visible"
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