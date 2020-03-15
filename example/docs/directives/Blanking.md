## Blanking 选择性显示

根据本地存储条件控制组件是否需要显示的指令。

### 使用场景

类似向导提示功能，当用户完成流程后，下一次进入将不在显示。

使用`vm.$blanking.setState`修改缓存中的隐藏情况。

使用`vm.$blanking.getState`查看缓存中某个索引的隐藏情况。

:::demo 使用`v-blanking`指令，传入一个字符串作为唯一索引。
```html
<mz-snackbar v-model="show"
  v-blanking="blanking-demo-1"
  text="这是一条测试消息。" 
  buttonText="关闭"
  :timeout="0"
  @buttonClick="close"></mz-snackbar>
<p class="demo-font-size-14">当前隐藏状态: {{state}}</p>
<mz-button color="success" @click="flush(false)">刷新页面</mz-button>
<mz-button color="danger" @click="flush(true)">重置状态</mz-button>

<script>
export default {
  data() {
    return {
      show: true,
      state: false
    }
  },
  
  methods: {
    setState(state) {
      this.$blanking.setState("blanking-demo-1", state)
    },

    getState() {
      this.state = this.$blanking.getState("blanking-demo-1")
    },

    close() {
      this.setState(true)
      this.show = false
      this.getState()
    },

    flush(reset){
      reset && this.setState(false)
      window.document.location.reload()
    }
  },

  created() {
    this.getState()
  }
}
</script>
```
:::

### 扩展使用

:::demo 使用`v-blanking`指令，传入一个对象，`key`作为唯一索引,`display`代表当前显示状态。一旦`display`变为`false`,则自动切换为已读状态。
```html
<mz-snackbar v-model="show"
  v-blanking="{
    key: 'blanking-demo-2',
    display: show
  }"
  text="这是一条测试消息。" 
  buttonText="关闭"
  :timeout="0"
  @buttonClick="close"></mz-snackbar>
<p class="demo-font-size-14">当前隐藏状态: {{state}}</p>
<mz-button color="success" @click="flush(false)">刷新页面</mz-button>
<mz-button color="danger" @click="flush(true)">重置状态</mz-button>

<script>
export default {
  data() {
    return {
      show: true,
      state: false
    }
  },
  
  methods: {
    getState() {
      this.state = this.$blanking.getState("blanking-demo-2")
    },

    close() {
      this.show = false
      this.$nextTick(this.getState)
    },

    flush(reset){
      reset && this.$blanking.setState("blanking-demo-2", false)
      window.document.location.reload()
    }
  },

  created() {
    this.getState()
  }
}
</script>
```
:::
