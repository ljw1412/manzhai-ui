## Resize 大小变化

当界面大小发生变化时，调用指定的函数。

### 监听Window大小变化

:::demo 使用`v-resize`指令监听window的大小变化
```html
<div v-resize="resize">width:{{width}},height:{{height}}</div>

<script>
export default {
  data(){
    return {
      width: 0,
      height: 0
    }
  },

  methods:{
    resize(){
      this.width = document.body.clientWidth
      this.height = document.body.clientHeight
    }
  }
}
</script>
```
:::