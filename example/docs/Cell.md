## Cell 单元格

单元列表效果。

### 单元格组及单元格嵌套

:::demo 单元格允许多层嵌套
```html
<mz-cell-group
  title="单元格组">
  <mz-cell title="单元格1"
    desc="描述性文字">
    <mz-cell slot="child"
      title="子单元格1-1"
      desc="子单元格描述性文字">
      <mz-cell slot="child"
        title="子单元格1-1-1"
        desc="子单元格描述性文字">
      </mz-cell>
    </mz-cell>
    <mz-cell slot="child"
      title="子单元格1-2"
      desc="子单元格描述性文字">
    </mz-cell>
  </mz-cell>
  <mz-cell title="单元格2"
    desc="描述性文字">
  </mz-cell>
</mz-cell-group>
```
:::

### 卡片样式单元格组

:::demo `type="card"`切换卡片样式
```html
<mz-cell-group
  title="单元格组"
  type="card">
  <mz-cell title="单元格1"
    desc="描述性文字">
  </mz-cell>
  </mz-cell>
  <mz-cell title="单元格2"
    desc="描述性文字">
  </mz-cell>
</mz-cell-group>
```
:::

### 开关单元格

含有Switch组件的单元格

:::demo cell上的`size`来调整switch大小
```html
<mz-cell-group
  title="开关单元格组">
  <mz-cell title="普通单元格"
    desc="描述性文字">
  </mz-cell>
  <mz-cell title="开关单元格"
    desc="小"
    type="switch"
    size="small">
  </mz-cell>
  <mz-cell title="开关单元格"
    desc="正常"
    type="switch"
    v-model="checked">
  </mz-cell>
  <mz-cell title="开关单元格"
    desc="大"
    type="switch"
    size="large">
  </mz-cell>
</mz-cell-group>

<script>
export default{
  data(){
    return {
      checked: false
    }
  }
}
</script>
```
:::


### Cell 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
| title | 标题 | String / Number |  |  |
| desc | 描述 | Boolean | | |
| type | 类型 | String | switch ||
| size | switch 大小 | String | large / small ||
| value / v-model | switch 的值 | String | | |


### Cell 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|单元格左侧的内容||
|title|单元格标题||
|desc|单元格描述||
|right|单元格右侧的内容||
|child|单元格子级内容||

### CellGroup 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
| title | 标题 | String / Number | |  |
| type | 类型 | String | card | |


### CellGroup 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|单元格组内容||


