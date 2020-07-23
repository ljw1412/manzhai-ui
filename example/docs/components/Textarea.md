## Textarea 多行输入框

能够输入多行文本内容的输入框。

### 基础用法
:::demo
```html
<mz-textarea v-model="value" placeholder="请输入"></mz-textarea>

<script>
export default {
  data (){
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 不同样式
:::demo `flat`属性控制是否使用扁平效果。`shadow`属性控制是否使用阴影显示。
```html
<p class="fs-14">shadow</p>
<mz-textarea v-model="value" shadow placeholder="请输入"></mz-textarea>
<p class="fs-14">flat</p>
<mz-textarea v-model="value2" flat placeholder="请输入"></mz-textarea>

<script>
export default {
  data (){
    return {
      value: '',
      value2: ''
    }
  }
}
</script>
```
:::


### 禁用
:::demo `disabled`属性控制是否禁用。
```html
<mz-textarea v-model="value" placeholder="请输入" disabled></mz-textarea>

<script>
export default {
  data (){
    return {
      value: '我是一段禁用文案'
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
|value/v-model|绑定值|String|||
|rows|输入框行数|String/Number||5|
|resize|是否能被用户缩放|string|none/ both/ horizontal/ vertical|'vertical'|
|name|原生属性|String|||
|maxlength|原生属性，最大输入长度|String/Number|||
|readonly|原生属性|Boolean|||
|disabled|是否禁用|Boolean|||
|placeholder|输入框占位文本|String|||
|autocomplete|原生属性，自动补全|String|'on'/'off'|'off'|
|ripple| 点击涟漪效果 | Boolean / Object | | true |
|flat|是否为扁平效果|Boolean|||
|shadow|是否为阴影效果|Boolean|||


#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|input|输入事件|(value:string)|
|focus|聚焦事件|(e:InputEvent)|
|blur|失焦事件|(e:InputEvent)|
|change|内容改变事件|(value:string)|