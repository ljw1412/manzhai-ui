## Hover 悬浮

基于 `mouseenter`,`mouseleave`事件提供悬浮状态。

### 基础用法
当悬浮于元素，会为绑定元素添加名为`hover`的Class。

:::demo
```html
<mz-card class="height-200" v-hover>请悬浮于此(请用开发者工具查看该元素状态)</mz-card>
```
:::

### 事件
该指令还提供了进/出悬浮状态的监听。

:::demo
```html
<mz-card class="height-200" 
  v-hover="{
    enter: handleEnter,
    leave: handleLeave }">
请悬浮于此(状态:{{isHover?'悬浮':'未悬浮'}})
</mz-card>

<script>
export default {
  data() {
    return {
      isHover: false
    }
  },

  methods:{
    handleEnter(){
      this.isHover = true
    },
    handleLeave(){
      this.isHover = false
    }
  }
}
</script>
```
:::