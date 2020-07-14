## Snackbar 消息条

用于页面中展示消息。

### 基础用法
::: demo `visible/v-model`控制组件的显隐，如果不绑定，将一直显示。消息条默认显示5秒。
```html
<div class="demo-font-size-14">一直显示：</div>
<mz-snackbar content="这是一条测试消息。" />
<div class="demo-font-size-14">自动消失：</div>
<mz-snackbar v-model="isShow" content="这是一条测试消息。" />
<mz-button @click="isShow = true">显示</mz-button>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>
```
:::

### 前缀图标
:::demo `icon`属性控制前缀图标。你也可以使用`prefix`插槽，自定义前缀内容。
```html
<mz-snackbar content="这是一条测试消息。" icon="flame"/>
```
:::

### 手动关闭

使用手动模式关闭消息框。

::: demo `timeout`为0时不会自动关闭。
```html
<mz-snackbar v-model="isShow"
  content="这是一条测试消息。"
  :timeout="0">
  <template #suffix>
    <mz-button text-color="#fff"
      @click="isShow = false">
        关闭
      </mz-button>
  </template>
</mz-snackbar>
<mz-button @click="isShow = true">显示默认插槽</mz-button>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>
```
:::

### 多行布局
::: demo `vertical`属性值控制布局的显示效果。
```html
<mz-snackbar v-model="isShow"
  vertical
  content="这是一条测试消息。"
  :timeout="0">
  <template #suffix>
    <mz-button text-color="#fff"
      width="100%"
      @click="isShow = false">
        关闭
      </mz-button>
  </template>
</mz-snackbar>
<mz-button @click="isShow = true">显示</mz-button>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>
```
:::

### 固定和位置

让消息框在全局固定位置显示。

::: demo `fixed`控制是否固定，`placement`控制消息框在界面的位置。
```html
<mz-snackbar v-model="isShow"
  fixed
  :content="`位置：${placement}`"
  :timeout="0"
  :placement="placement">
  <template #suffix>
    <mz-button text-color="#fff"
      @click="isShow = false">
        关闭
      </mz-button>
  </template>
</mz-snackbar>
<mz-button color="primary" @click="isShow = true">显示</mz-button>
<br><br>
<mz-filter-section v-model="placement" label="placement">
  <mz-filter-section-item v-for="item of placementList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>

<script>
export default {
  data() {
    return {
      isShow: false,
      placementList: [ 'top','top-start', 'top-end', 'center', 'bottom', 'bottom-start',  'bottom-end' ],
      placement: 'bottom'
    }
  }
}
</script>
```
:::

### 全局方法

ManZhai 为 Vue.prototype 添加了全局方法 $snackbar。因此在 vue instance 中可以采用本页面中的方式调用 Snackbar。

::: demo 方法`show`里传的config，与组件Snackbar的属性值完全一致。
```html
<mz-button @click="onClick">显示</mz-button>

<script>
export default {
  methods:{
    onClick() {
      this.$snackbar.show({
        content: '测试',
        placement: 'bottom',
        timeout: 0
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
|visible/v-model|绑定值，是否显示|Boolean|||
|content|内容文本|String|||
| size | 尺寸 | String | small / medium / large |  |
|absolute|是否绝对定位|Boolean|||
|fixed|是否固定定位|Boolean|||
|timeout|延迟关闭时间，为0时不关闭|Number||5000|
|color|背景颜色|String|primary / success / warning / danger 或 Color in CSS||
|textColor|文字颜色|String|||
|vertical|是否垂直模式|Boolean|||
|appendToBody|是否添加到body下|Boolean|||
|offset|偏移量|[number,number]||[0,0]|
|radius|圆角大小，同css|String|||
|placement|所在位置，在绝对或固定时有效|String|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|'bottom'|
|zIndex|层级|Number||1000|