## Carousel 轮播

在一个容器内循环播放内容。

### 基础用法

进行定时轮播。

:::demo `height`属性控制轮播组件的高度，默认值 100%。`vertical`属性控制轮播方式是否垂直。
```html
<mz-row :gutter="16">
  <mz-col :span="12">
    <div style="text-align: center">水平方向</div>
    <mz-carousel height="400px">
      <mz-carousel-item class="bg-indigo"></mz-carousel-item>
      <mz-carousel-item class="bg-success"></mz-carousel-item>
      <mz-carousel-item class="bg-warning"></mz-carousel-item>
      <mz-carousel-item class="bg-danger"></mz-carousel-item>
    </mz-carousel>
  </mz-col>
  <mz-col :span="12">
    <div style="text-align: center">垂直方向</div>
    <mz-carousel vertical height="400px">
      <mz-carousel-item class="bg-indigo"></mz-carousel-item>
      <mz-carousel-item class="bg-success"></mz-carousel-item>
      <mz-carousel-item class="bg-warning"></mz-carousel-item>
      <mz-carousel-item class="bg-danger"></mz-carousel-item>
    </mz-carousel>
  </mz-col>
</mz-row>
```
:::

### 箭头

轮播的手动切换箭头。

:::demo `arrow`属性控制箭头显示策略。可选值`always`,`hover`,`never`。默认值`always`。
```html
<mz-filter-section v-model="arrow"
  label="箭头显示策略：" label-position="right">
  <mz-filter-section-item v-for="item of arrowList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>

<mz-carousel height="400px" :arrow="arrow">
  <mz-carousel-item class="bg-indigo"></mz-carousel-item>
  <mz-carousel-item class="bg-success"></mz-carousel-item>
  <mz-carousel-item class="bg-warning"></mz-carousel-item>
  <mz-carousel-item class="bg-danger"></mz-carousel-item>
</mz-carousel>


<script>
export default {
  data() {
    return {
      arrow: 'hover',
      arrowList: ['always', 'hover', 'never'],
    }
  }
}
</script>
```
:::

### 指示器

轮播内置了多种样式的指示器。

:::demo `indicator`属性控制指示器的显示和效果。可选值`none`,`line`,`full-line`,`circle`。默认值`none`。
```html
<mz-filter-section v-model="type"
  label="指示器类型：" label-position="right">
  <mz-filter-section-item v-for="item of typeList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>
<mz-filter-section v-model="placement"
  label="指示器位置：" label-position="right">
  <mz-filter-section-item v-for="item of placementList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>

<mz-carousel height="400px" :indicator="type" :indicator-placement="placement">
  <mz-carousel-item class="bg-indigo"></mz-carousel-item>
  <mz-carousel-item class="bg-success"></mz-carousel-item>
  <mz-carousel-item class="bg-warning"></mz-carousel-item>
  <mz-carousel-item class="bg-danger"></mz-carousel-item>
</mz-carousel>


<script>
export default {
  data() {
    return {
      type: 'line',
      typeList: ['none', 'line', 'full-line', 'circle'],
      placement: 'bottom',
      placementList: ['top', 'bottom', 'left', 'right', 'outside']
    }
  }
}
</script>
```
:::

### 指示器颜色自定义

用户可以自定义指示器的颜色。

:::demo `active-color`属性为被选中的颜色，`inactive-color`属性为未被选中的颜色。
```html
<mz-carousel height="400px">
  <mz-carousel-item class="bg-indigo"></mz-carousel-item>
  <mz-carousel-item class="bg-success"></mz-carousel-item>
  <mz-carousel-item class="bg-warning"></mz-carousel-item>
  <mz-carousel-item class="bg-danger"></mz-carousel-item>
  <template #indicator>
    <mz-carousel-indicator active-color="green" inactive-color="yellow" />
  </template>
</mz-carousel>


<script>
export default {
  data() {
    return {
      type: 'line',
      typeList: ['none', 'line', 'full-line', 'circle'],
      placement: 'bottom',
      placementList: ['top', 'bottom', 'left', 'right', 'outside']
    }
  }
}
</script>
```
:::

### 自定义指示器

可以自由扩展的指示器。

:::demo `indicator`作用域插槽用于自定义指示器，它返回一个对象包含:item(当前轮播到的CarouselItem实例),index(当前下标),pageIndex(当前页数，即index+1),length(总共页数)。
```html
<p>Demo1:</p>
<mz-carousel ref="carousel" height="200px">
  <mz-carousel-item v-for="(item, index) of list"
    :key="index"
    :data="item"
    :class="`bg-${item.color}`">
    <div style="text-align:center; font-size:40px; color:#fff; line-height:200px;">{{index+1}}</div>
  </mz-carousel-item>
  <template #indicator="{index}">
    <div class="custom-indicator">
      <div v-for="(item, i) of list" 
        :key="i"
        class="custom-indicator__item"
        :class="{'custom-indicator__item--active':index===i}"
        @click="switchPage(i)">
        {{item.title}}
      </div>
    </div>
  </template>
</mz-carousel>
<p>Demo2:</p>
<mz-carousel ref="carousel2" height="200px">
  <mz-carousel-item v-for="(item, index) of list"
    :key="index"
    :data="item"
    :class="`bg-${item.color}`">
    <div style="text-align:center; font-size:40px; color:#fff; line-height:200px;">{{index+1}}</div>
  </mz-carousel-item>
  <template #indicator="{item, pageIndex, length}">
    <div style="position: absolute; right: 10px; bottom: 5px; color: #fff;">
      <!-- 此处的item.data与mz-carousel-item组件传入的data属性一致 -->
      ({{pageIndex}}/{{length}}){{item.data.title}}
    </div>
  </template>
</mz-carousel>

<script>
export default {
  data() {
    return {
      list: [
        {color:'indigo',title:'标题1'},
        {color:'success',title:'标题2'},
        {color:'warning',title:'标题3'},
        {color:'danger',title:'标题4'}
      ]
    }
  },

  methods: {
    switchPage(index){
      this.$refs.carousel.setIndexAndRestartTimer(index)
    }
  }
}
</script>

<style>
.custom-indicator{
  display: flex;
  background-color: #000;
  color: #fff;
}
.custom-indicator__item{
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
}
.custom-indicator__item:not(.custom-indicator__item--active):hover{
   background-color: #666;
}
.custom-indicator__item--active{
  background-color: #ddd;
  color: #000;
}
</style>
```
:::


### 手动模式和不循环

进行定时轮播。

:::demo `autoplay`属性控制轮播组件的自动播放，默认值 true。`loop`属性控制轮播方式是否循环切换，默认值 true。
```html
<mz-carousel :autoplay="false" :loop="false" height="400px">
  <mz-carousel-item class="bg-indigo"></mz-carousel-item>
  <mz-carousel-item class="bg-success"></mz-carousel-item>
  <mz-carousel-item class="bg-warning"></mz-carousel-item>
  <mz-carousel-item class="bg-danger"></mz-carousel-item>
</mz-carousel>
```
:::


### Carousel API
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|width|宽度|String||'100%'|
|height|高度|String||'100%'|
|initial-index|初始状态激活的幻灯片的索引，从 0 开始|Number||0|
|delay|自动切换的时间间隔，单位为毫秒|Number||5000|
|transition|切换时的动画名称|String|||
|reverseTransition|反方向切换时的动画名称|String|||
|loop|是否循环显示|Boolean||true|
|autoplay|是否自动切换|Boolean||true|
|stopOnHover|是否在悬浮时停止切换|Boolean||true|
|vertical|是否为垂直方向切换|Boolean|||
|arrow|箭头显示的时机|String|'always' / 'hover' / 'never'|'hover'|
|indicator|指示器的显示效果|String|'none' / 'line' / 'full-line' / 'circle'|'none'|
|indicatorPlacement|指示器的位置|String|'top' / 'bottom' / 'left' / 'right' / 'outside'|'bottom'|

#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|change|轮播切换事件|(index: number)|

#### 方法
|名称|说明|参数|
|---|---|---|
|setIndexAndRestartTimer|设置当前下标并重置计时器|(index)|

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|轮播的内容||
|indicator|指示器|{item,index,pageIndex,length}|

### CarouselItem API
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|data|用来存储单个数据，与指示器作用域插槽的`item.data`一致|any|||

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|轮播元素的内容||

### CarouselIndicator API
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|placement|指示器的位置|String|'top' / 'bottom' / 'left' / 'right' / 'outside'|'bottom'|
|type|指示器的显示效果|String|'line' / 'full-line' / 'circle'|'none'|
|activeColor|选中时颜色|String|||
|inactiveColor|未选中时颜色|String|||