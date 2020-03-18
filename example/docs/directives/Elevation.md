## Elevation 海拔

根据不同海拔给绑定元素增加阴影。

### 基础用法
:::demo `v-elevation`属性传入范围为 0-24 之间的整数。
```html
<div v-elevation="elevation"
  style="width:100%;height:200px;">
  <mz-button-group>
    <mz-button outlined
      color="primary"
      :disabled="elevation <= 0"
      @click="elevation--">-</mz-button>
    <mz-button outlined
      color="primary"
      :disabled="elevation >= 24" 
      @click="elevation++">+</mz-button>  
  </mz-button-group>
  elevation:{{elevation}}
</div>

<script>
export default {
  data (){
    return {
      elevation: 0
    }
  }
}
</script>
```
:::