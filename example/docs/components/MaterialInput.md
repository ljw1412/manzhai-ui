## MaterialInput 输入框(类material风格)

### 基础用法
:::demo `value/v-model`设置input的绑定值。
```html
<mz-material-input v-model="value" placeholder="请输入关键词"></mz-material-input>

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

### 边框样式
:::demo `outlined`控制是否显示边框。
```html
<mz-material-input v-model="value" 
  placeholder="请输入关键词" outlined></mz-material-input>

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

### 标签名称
:::demo `label`属性为input的标签名称。
```html
<mz-material-input v-model="value" label="姓名">
</mz-material-input>
<mz-material-input v-model="value2" label="姓名" outlined>
</mz-material-input>

<script>
export default {
  data() {
    return {
      value: '',
      value2: ''
    }
  }
}
</script>
```
:::

### 提示与错误
::: demo `hint`控制底部提示内容，`error`属性控制当前是否错误，`error-message`属性控制错误提示文案。
```html
<mz-material-input v-model="value" 
  placeholder="请输入关键词"
  :hint="hint"
  :error="error"
  :error-message="errorMsg"
  @focus="handleFocus"
  @blur="handleBlur"></mz-material-input>

<script>
export default {
  data() {
    return {
      value: '',
      error: false,
      errorMsg: '',
      hint: '请输入6个字符'
    }
  },

  methods: {
    handleFocus() {
      this.error = false
    },
    handleBlur() {
      this.error = this.value.length > 6
      this.errorMsg = '错误，最多可输入6个字符'
    }
  }
}
</script>
```
:::

### 前后置图标
:::demo `prepend-icon`控制前置显示图标，`append-icon`控制显示后置图标。`@prepend-icon-click`、`@append-icon-click`监听前后置按钮点的绑定事件(当事件绑定后，悬停按钮鼠标将会变为可点击状态)。
```html
<mz-material-input v-model="value" 
  label="密码"
  prepend-icon="md-key"
  append-icon="md-eye"
  :type="type"
  @append-icon-click="displayPassword"></mz-material-input>

<script>
export default {
  data() {
    return {
      value: '',
      type: 'password'
    }
  },

  methods: {
    displayPassword(){
      this.type = (this.type === 'password' ? 'text' : 'password')
    }
  }
}
</script>
```
:::

### 字数统计
:::demo `show-word-count`设置是否显示字数统计。`maxlength`控制最大字符长度。
```html
<mz-material-input v-model="value"
  show-word-count
  placeholder="请输入关键词"></mz-material-input>
<mz-material-input v-model="value2"
  show-word-count
  maxlength="10"
  hint="请输入10个字符"
  placeholder="请输入关键词"></mz-material-input>


<script>
export default {
  data() {
    return {
      value: '',
      value2: ''
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
|value/v-model|绑定值|String / Number|||
|type|同原生 [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)|String|||
|name|原生属性|String|||
|maxlength|原生属性，最大输入长度||||
|readonly|原生属性|Boolean|||
|disabled|是否禁用|Boolean|||
|label|标签名称|String|||
|label-up|label是否默认抬起|Boolean|||
|placeholder|输入框占位文本|String|||
|autocomplete|原生属性，自动补全|String|'on'/'off'|'off'|
|show-word-count|是否显示输入字数统计|Boolean|||
|outlined|是否以边框模式显示|Boolean|||
|prepend-icon|前置Icon图标名称|String|||
|prepend-src|前置图标地址|String|||
|append-icon|后置Icon图标名称|String|||
|append-src|后置图标地址|String|||
|hint|底部提示|String|||
|error|是否错误|Boolean|||
|errorMessage|底部错误提示|String|||
|rule|(未实现)||||


#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|input|input 的输入事件|(value: String)|
|focus|input 的聚焦事件|(event: InputEvent)|
|blur|input 的失焦事件|(event: InputEvent)|
|change|input 的改变事件|(value: String)|
|prepend-icon-click|input 的前置点击事件||
|append-icon-click|input 的后置点击事件||