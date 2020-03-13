## Button 按钮

实现常用的按钮功能。

### 基本用法

基础按钮的用法。

:::demo 使用`color`、`outlined`、`flat`、`round`、`circle`、`icon`属性来定义 Button 的样式。你可以通过`disabled`属性来修改按钮的禁用状态。

```html
<span class="demo-font-size-14">状态控制: </span>
<mz-checkbox-group v-model="checkedList">
  <mz-checkbox v-for="option of options" 
    :value="option" :key="option">{{option}}</mz-checkbox>
</mz-checkbox-group>
<div>
  <mz-button v-for="item of buttonList" 
    :key="item.label"
    :color="item.color"
    :disabled="state.disabled" 
    :outlined="state.outlined"
    :flat="state.flat"
    :round="state.round">{{item.label}}</mz-button>
</div>
<div>
  <mz-button v-for="item of buttonList"
    :key="item.label"
    :color="item.color"
    :disabled="state.disabled" 
    :outlined="state.outlined"
    :flat="state.flat"
    :round="state.round"
    circle 
    icon>
    <mz-icon name="md-alarm"size="20px"></mz-icon>
  </mz-button>
</div>

<script>
export default {
  data() {
    return {
      checkedList: [],
      options: ['disabled', 'outlined', 'flat', 'round'],
      buttonList: [
        { color:'', label:'默认按钮' },
        { color:'primary', label:'主要按钮' },
        { color:'success', label:'成功按钮' },
        { color:'warning', label:'警告按钮' },
        { color:'danger', label:'危险按钮' }
      ]
    }
  },

  computed: {
    state(){
      const state = {}
      this.options.forEach(key =>{
        state[key] = this.checkedList.includes(key)
      })
      return state
    }
  }
}
</script>
```
:::

### 按钮尺寸

我们为按钮提供了4种大小尺寸，根据场景选择合适的按钮尺寸。

:::demo 尺寸有`small`、`medium`、`(默认)`、`large`，通过设置size属性来配置它们。
```html
<div>
  <mz-button color="primary" size="large">默认按钮</mz-button>
  <mz-button color="primary" size="medium">默认按钮</mz-button>
  <mz-button color="primary">默认按钮</mz-button>
  <mz-button color="primary" size="small">默认按钮</mz-button>
</div>

<div>
  <mz-button color="primary" outlined size="large">线条按钮</mz-button>
  <mz-button color="primary" outlined size="medium">线条按钮</mz-button>
  <mz-button color="primary" outlined>线条按钮</mz-button>
  <mz-button color="primary" outlined size="small">线条按钮</mz-button>
</div>

<div>
  <mz-button color="primary" flat size="large">扁平按钮</mz-button>
  <mz-button color="primary" flat size="medium">扁平按钮</mz-button>
  <mz-button color="primary" flat>扁平按钮</mz-button>
  <mz-button color="primary" flat size="small">扁平按钮</mz-button>
</div>

<div>
  <mz-button color="primary" round size="large">圆角按钮</mz-button>
  <mz-button color="primary" round size="medium">圆角按钮</mz-button>
  <mz-button color="primary" round>圆角按钮</mz-button>
  <mz-button color="primary" round size="small">圆角按钮</mz-button>
</div>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
| type | 类型 | String | primary / success / warning / danger | - |
| size | 尺寸 | String | large / small   | - |
| disabled | 是否禁用状态 | Boolean | | |
| icon | 是否图标状态	 | Boolean | | |
| ripple | 点击涟漪效果 | Boolean / Object | | true |
| circle | 是否圆形按钮	 | Boolean | | |
| outlined | 是否线条按钮	 | Boolean | | |
| flat | 是否扁平按钮	 | Boolean | | |
| round | 是否圆角按钮	 | Boolean | | |
| native-type | 原生 type 属性 | String | button / submit / reset | 'button' |
| font-color | 文字颜色 | String | | |
| color | 背景颜色 | String | | |
| border-color | 边框颜色 | String | | |
| border-radius | 边框圆角 | String | | |

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|按钮的内容||