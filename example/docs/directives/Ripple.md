## Ripple 涟漪效果

### 基础用法

使用`v-ripple`指令，传递一个Boolean类型来控制是否使用。

:::demo
```html
<div class="height-200" v-ripple="true">点击</div>
```
:::

### 更多用法

使用`v-ripple`指令，传递一个Object。

-  value: boolean  // 是否启用
 
-  center: boolean // 是否以中心扩散
 
-  class: string // 涟漪元素的自定义class


:::demo
```html
<div class="height-200"
   v-ripple="{value:true,center:true}">点击以中心扩散</div>
```
:::