## Mask 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 基础用法
:::demo `value`属性控制遮罩的显示和隐藏。
```html
<mz-mask :value="visible"
  @click="visible = false"></mz-mask>
<mz-button color="success"
  @click="visible = true">显示遮罩</mz-button>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
```
:::