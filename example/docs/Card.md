## Card 卡片

以卡片显示展示内容。

### 卡片海拔

提供了25个海拔层级显示卡片的效果。

:::demo `elevation`属性范围为 0-24 之间的整数。
```html
<div>
  <mz-button outlined
    color="primary"
    :disabled="elevation <= 0"
    @click="elevationBy(-1)">-</mz-button>
  <mz-button outlined
    color="primary"
    :disabled="elevation >= 24" 
    @click="elevationBy(1)">+</mz-button>
  <mz-card
    width="80%"
    height="200px"
    :elevation="elevation">
    <span>当前海拔{{elevation}}</span>
  </mz-card>
</div>

<script>
export default{
  data(){
    return {
      elevation: 0
    }
  },

  methods: {
    elevationBy(step){
      this.elevation += step
    }
  }
}
</script>
```
:::

### 线条卡片

有线条围绕的扁平卡片

:::demo 注意: 当使用`outlined`属性展示线条卡片时，会自动将`elevation`降到0。
```html
<mz-card outlined
  width="80%"
  height="200px">
  <span>边框卡片</span>
</mz-card>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
| elevation | 海拔 | String / Number | 1-24 | 3 |
| outlined | 是否线条卡片 | Boolean | --- |---|
| background | 卡片背景，同style的background | String | --- |---|
| width | 宽度 | String | --- |---|
| min-width | 最小宽度 | String | --- |---|
| max-width | 最大宽度 | String | --- |---|
| height | 高度 | String | --- |---|
| min-height | 最小高度 | String | --- |---|
| max-height | 最大高度 | String | --- |---|

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|卡片的内容||