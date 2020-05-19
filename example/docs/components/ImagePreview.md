## ImagePreview 图片预览

以页面全屏的形式预览图片。

### 基础用法

:::demo `images`传递图片列表。
```html
<mz-button @click="visible = true">预览</mz-button>
<mz-image-preview v-model="visible"
  :images="images"></mz-image-preview>

<script>
export default {
  data (){
    return {
      visible: false,
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  }
}
</script>
```
:::

### 功能布局

ImagePreview内置了一些功能。

:::demo `layout`属性控制布局的展示效果，可选值`zoom`, `play`, `fullscreen`, `download`, `thumbnail`，多个布局以英文逗号或者空格分隔。
```html
<mz-image-preview v-model="visible"
  :layout="layout"
  :images="images"></mz-image-preview>
<mz-checkbox-group v-model="checkList">
  <mz-checkbox value="zoom">zoom</mz-checkbox>
  <mz-checkbox value="play">play</mz-checkbox>
  <mz-checkbox value="fullscreen">fullscreen</mz-checkbox>
  <mz-checkbox value="download">download</mz-checkbox>
  <mz-checkbox value="thumbnail">thumbnail</mz-checkbox>
</mz-checkbox-group>
<mz-button color="primary" @click="visible = true">预览</mz-button>

<script>
export default {
  data (){
    return {
      visible: false,
      checkList: ['zoom' ,'play' ,'fullscreen' ,'download' ,'thumbnail'],
      images: [
        'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',
        require('@example/static/image-star.jpg')
      ]
    }
  },

  computed:{
    layout(){
      return this.checkList.join(' ')
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
          require('@example/static/image-star.jpg')
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