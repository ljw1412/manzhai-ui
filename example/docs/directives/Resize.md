## Resize 大小变化

当界面大小发生变化时，调用指定的函数。

### 监听Window大小变化

使用`v-resize`指令监听window的大小变化

:::demo 使用`quiet`修饰符，则加载后不立刻调用提供的回调。
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

### 监听元素大小变化

使用`v-el-resize`指令监听元素的大小变化

:::demo 
```html
<span class="demo-font-size-14" style="margin-right: 10px;">width:</span>
<mz-button-group>
  <mz-button outlined
    @click="percent.width -= 10">-</mz-button>
  <mz-button outlined
    @click="percent.width = 100">{{percent.width}}%</mz-button>
  <mz-button outlined
    @click="percent.width += 10">+</mz-button>
</mz-button-group>
<span class="demo-font-size-14" style="margin:0 10px;">height:</span>
<mz-button-group>
  <mz-button outlined
    @click="percent.height -= 10">-</mz-button>
  <mz-button outlined
    @click="percent.height = 100">{{percent.height}}%</mz-button>
  <mz-button outlined
    @click="percent.height += 10">+</mz-button>
</mz-button-group>

<div style="height: 300px; margin-top: 20px;">
  <div v-el-resize="resize"
    class="resize-div"
    :style="{
      width:`${percent.width}%`,
      height:`${percent.height}%`
    }">
    width:{{width}},height:{{height}}
  </div>
</div>


<script>
export default {
  data(){
    return {
      percent:{
        width: 100,
        height: 100
      },
      width: 0,
      height: 0
    }
  },

  methods:{
    resize(e){
      this.width = e.contentRect.width
      this.height = e.contentRect.height
    }
  }
}
</script>

<style>
.resize-div{
  border: 1px solid #999;
}
</style>
```
:::
