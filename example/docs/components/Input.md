## Input 输入框

通过鼠标或键盘输入内容。

### 基础用法
:::demo
```html
<mz-input v-model="value" placeholder="请输入文字"></mz-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::


### 圆角
:::demo `rounded`属性控制是否使用圆角显示。
```html
<mz-input v-model="value" placeholder="请输入文字" rounded>
</mz-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 不同大小

提供了3种输入框大小。

:::demo `size`属性控制输入框的大小，可选值`small`、`medium`、`(默认)`、`large`。
```html
<mz-input v-model="value" placeholder="小" size="small">
</mz-input>
<mz-input v-model="value" placeholder="中" size="medium">
</mz-input>
<mz-input v-model="value" placeholder="默认">
</mz-input>
<mz-input v-model="value" placeholder="大" size="large">
</mz-input>

<mz-input v-model="value" placeholder="小(圆角)" rounded size="small">
</mz-input>
<mz-input v-model="value" placeholder="中(圆角)" rounded size="medium">
</mz-input>
<mz-input v-model="value" placeholder="默认(圆角)" rounded>
</mz-input>
<mz-input v-model="value" placeholder="大(圆角)" rounded size="large">
</mz-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 扁平样式
:::demo `flat`属性控制是否使用扁平效果。
```html
<mz-input v-model="value"
  placeholder="请输入文字"
  flat></mz-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 阴影样式
:::demo `shadow`属性控制是否使用阴影显示。
```html
<mz-input v-model="value"
  placeholder="请输入文字"
  shadow></mz-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 前后缀
:::demo `prefix`、`suffix`属性添加字符型的前置内容。你也可以使用同名插槽进行更多的扩展。
```html
<mz-input v-model="username" placeholder="请输入用户名">
  <mz-icon name="md-person" slot="prefix"></mz-icon>
</mz-input>

<mz-input v-model="value" placeholder="请输入金额" prefix="￥"
suffix="RMB">
</mz-input>

<script>
export default {
  data() {
    return {
      username:'',
      value: ''
    }
  }
}
</script>
```
:::


### 禁用
:::demo `disabled`属性控制是否禁用。
```html
<mz-input v-model="value" disabled></mz-input>
<mz-input v-model="value" disabled rounded></mz-input>

<script>
export default {
  data() {
    return {
      value: '禁用的输入框'
    }
  }
}
</script>
```
:::

### 输入框组合

:::demo
```html
<mz-input-group>  
  <mz-select v-model="protocol">
    <mz-option value="http://"></mz-option>
    <mz-option value="https://"></mz-option>
    <mz-option value="ftp://"></mz-option>
  </mz-select>
  <mz-input v-model="value" outlined></mz-input> 
  <mz-button color="primary">确定</mz-button>
</mz-input-group>


<script>
export default {
  data() {
    return {
      protocol:'',
      value: ''
    }
  }
}
</script>
```
:::


### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- |---|
|value/v-model|绑定值|String / Number|||
|type|同原生 [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)|String|||
|name|原生属性|String|||
|maxlength|原生属性，最大输入长度||||
|readonly|原生属性|Boolean|||
|disabled|是否禁用|Boolean|||
|placeholder|输入框占位文本|String|||
|autocomplete|原生属性，自动补全|String|'on'/'off'|'off'|
| ripple | 点击涟漪效果 | Boolean / Object | | true |
|rounded|是否为圆角效果|Boolean|||
|flat|是否为扁平效果|Boolean|||
|shadow|是否为阴影效果|Boolean|||
|prefix|前缀内容，复杂内容请使用同名插槽|String|||
|suffix|后缀内容，复杂内容请使用同名插槽|String|||
| size | 尺寸 | String | small / medium / large   |  |


#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|prefix|前缀||
|suffix|后缀||


#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|input|输入事件|(value:string)|
|focus|聚焦事件|(e:InputEvent)|
|blur|失焦事件|(e:InputEvent)|
|change|内容改变事件|(value:string)|