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

### 使用指令形式

使用$imagePreview指令进行控制预览。

:::demo 
```html
<mz-button @click="show">预览</mz-button>


<script>
export default {
  methods:{
    show() {
      this.$imagePreview.show({
        images: [
          'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
          require('@/static/image-star.jpg')
        ]
      })
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
|visible|是否显示，可以使用`.sync`修饰|Boolean|||
|thumbnail|是否显示缩略图|Boolean|||
|playable|是否可以轮播|Boolean|||
|actionbar|是否有图片操作栏|Boolean|||
|loop|是否循环切换|Boolean|||
|appendToBody|是否添加到body上|Boolean|||
|images|图片列表|String[] / { url: string; title?: string; thumbnail?: string }[]||[]|
|current|当前图片地址，(与index二选一)|String|||
|index|当前下标，(与current二选一)|Number|||
|min-zoom|最小缩放|Number||0.1|
|max-zoom|最大缩放|Number||4|
|zIndex|同原生 z-index|Number|||

#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|action|操作事件|(action:string)|
|opened|显示事件||
|close|关闭事件||
|closed|关闭后事件||