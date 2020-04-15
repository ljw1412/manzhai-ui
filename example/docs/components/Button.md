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
  <mz-button color="primary">默认按钮</mz-button>
  <mz-button color="primary" size="medium">默认按钮</mz-button>
  <mz-button color="primary" size="small">默认按钮</mz-button>
</div>

<div>
  <mz-button color="primary" outlined size="large">线条按钮</mz-button>
  <mz-button color="primary" outlined>线条按钮</mz-button>
  <mz-button color="primary" outlined size="medium">线条按钮</mz-button>
  <mz-button color="primary" outlined size="small">线条按钮</mz-button>
</div>

<div>
  <mz-button color="primary" flat size="large">扁平按钮</mz-button>
  <mz-button color="primary" flat>扁平按钮</mz-button>
  <mz-button color="primary" flat size="medium">扁平按钮</mz-button>
  <mz-button color="primary" flat size="small">扁平按钮</mz-button>
</div>

<div>
  <mz-button color="primary" round size="large">圆角按钮</mz-button>
  <mz-button color="primary" round>圆角按钮</mz-button>
  <mz-button color="primary" round size="medium">圆角按钮</mz-button>
  <mz-button color="primary" round size="small">圆角按钮</mz-button>
</div>
```
:::

### 紧凑按钮
:::demo `dense`属性控制按钮内部文字到边距更近些。
```html
<mz-button color="primary" size="large">松</mz-button>
<mz-button color="primary" size="large" dense>紧</mz-button>
<mz-button color="primary">松</mz-button>
<mz-button color="primary" dense>紧</mz-button>
<mz-button color="primary" size="medium">松</mz-button>
<mz-button color="primary" size="medium" dense>紧</mz-button>
<mz-button color="primary" size="small">松</mz-button>
<mz-button color="primary" size="small" dense>紧</mz-button>
```
:::

### 按钮阴影
:::demo `shadow`属性控制是否使用按钮阴影效果。
```html
<mz-button color="primary" size="large" shadow>按钮阴影</mz-button>
<mz-button color="primary" shadow>按钮阴影</mz-button>
<mz-button color="primary" size="medium" shadow>按钮阴影</mz-button>
<mz-button color="primary" size="small" shadow>按钮阴影</mz-button>
```
:::

### 自定义颜色

我们为按钮预设了4种主要颜色，用户也可以根据需求修改按钮颜色。

:::demo `color`属性控制背景颜色，预设了`primary`、`success`、`warning`、`danger`。`text-color`属性控制文字颜色。
```html
<div>
  <mz-button color="orange">按钮</mz-button>
  <mz-button text-color="blue">按钮</mz-button>
  <mz-button color="#00a1d6" text-color="#c6e48b">按钮</mz-button>
  <mz-button color="success" text-color="#fcba2a">按钮</mz-button>
</div>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`mz-button-group`组件将按钮归为一个组。注意：插槽内只允许传入`mz-button`组件。
```html
<mz-button-group>
  <mz-button color="primary">按钮1</mz-button>
  <mz-button color="primary">按钮2</mz-button>
  <mz-button color="primary">按钮3</mz-button>
</mz-button-group>
<mz-button-group>
  <mz-button round color="primary">按钮1</mz-button>
  <mz-button round color="primary">按钮2</mz-button>
  <mz-button round color="primary">按钮3</mz-button>
</mz-button-group>
<mz-button-group>
  <mz-button outlined color="primary">按钮1</mz-button>
  <mz-button outlined color="primary">按钮2</mz-button>
  <mz-button outlined color="primary">按钮3</mz-button>
</mz-button-group>
<mz-button-group>
  <mz-button outlined round color="primary">按钮1</mz-button>
  <mz-button outlined round color="primary">按钮2</mz-button>
  <mz-button outlined round color="primary">按钮3</mz-button>
</mz-button-group>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|value|按钮文字内容，可以使用默认插槽代替|String|||
| size | 尺寸 | String | large / small   | - |
| disabled | 是否禁用状态 | Boolean | | |
| icon | 是否图标状态	 | Boolean | | |
| ripple | 点击涟漪效果 | Boolean / Object | | true |
| circle | 是否圆形按钮	 | Boolean | | |
| outlined | 是否线条按钮	 | Boolean | | |
| flat | 是否扁平按钮	 | Boolean | | |
| round | 是否圆角按钮	 | Boolean | | |
| dense | 是否按钮文字紧凑	 | Boolean | | |
| shadow | 是否使用按钮阴影效果	 | Boolean | | |
| native-type | 原生 type 属性 | String | button / submit / reset | 'button' |
| color | 背景颜色 | String | primary / success / warning / danger / Color in Css | |
| text-color | 文字颜色 | String | | |
| radius | 圆角大小 | String | | '4px' |

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|默认|按钮的内容||