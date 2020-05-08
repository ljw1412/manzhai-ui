## Switch 开关

表示两种相互对立的状态间的开关选择器。

### 基础用法
:::demo `circle`属性可以控制滑块是否为圆形。`disabled`属性可以控制开关是否禁用。
```html
<mz-switch v-model="value"></mz-switch>
<mz-switch v-model="value" disabled></mz-switch>
<mz-switch v-model="value" circle></mz-switch>
<mz-switch v-model="value" circle disabled></mz-switch>

<script>
export default {
  data (){
    return {
      value: true
    }
  }
}
</script>
```
:::

### 不同大小

提供了3种不同的开关大小。

:::demo `size`属性控制开关大小，可选值: small / (默认) / large。
```html
<mz-switch v-model="value" size="small"></mz-switch>
<mz-switch v-model="value"></mz-switch>
<mz-switch v-model="value" size="large"></mz-switch>

<script>
export default {
  data (){
    return {
      value: true
    }
  }
}
</script>
```
:::

### 状态图标

:::demo `active-icon`为开关开启的图标，`inactive-icon`为开关关闭的图标。
```html
<mz-switch v-model="value" 
  size="large"
  active-icon="md-moon" 
  inactive-icon="md-sunny"></mz-switch>

<script>
export default {
  data (){
    return {
      value: true
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
|value/v-model|当前选中值|Boolean|||
|disabled|是否禁用|Boolean|||
|circle|滑块是否为圆形|Boolean|||
|active-icon|开关开启的滑块上的图标|String|||
|inactive-icon|开关关闭的滑块上的图标|String|||
|iconColor|开关的滑块上的图标颜色|String|||
|name|同原生input的name属性|String|||