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

### 使用指令

引入 Mask 组件后，会自动在 Vue 的 prototype 上挂载 $mask 方法，在所有组件内部都可以直接调用此方法。

它包含`show`和`hide`两个方法。

:::demo
```html
<mz-button color="success"
  @click="show">显示遮罩</mz-button>

<script>
export default {
  methods: {
    show(){
      this.$mask.show({ click: () => this.$mask.hide() })
    }
  }
}
</script>
```
:::