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
        {url:'https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4',title:'测试图片1'},
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
|visible/v-model|是否显示|Boolean|||
|layout|布局，以空格分隔|String|`zoom play fullscreen download thumbnail`|''|
|images|图片列表|String[] / { url: string; title?: string; thumbnail?: string }[]||[]|
|index.sync|当前下标|Number||0|
|zoom|缩放|Number[]|[min,max]| [0.1, 4]|
|mask-color|遮罩颜色|String||'#000'|
|mask-blur|遮罩背景模糊度|String|||
|z-index|同原生 z-index|Number|||
|append-to-body|是否插入至 body 元素上|Boolean|||
|close-on-press-escape|	是否可通过按下 ESC 键关闭|Boolean||true|
|before-close|关闭前的回调|(done)=>void / Promise|||

#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|open|显示事件||
|close|关闭事件||