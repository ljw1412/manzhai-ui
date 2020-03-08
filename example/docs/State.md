## State 状态变化

根据状态显示不同内容

### 基础用法

:::demo
```html
<mz-button outlined :disabled="loading" type="danger"
  @click="loadData(true)">加载空数据</mz-button>
<mz-button outlined :disabled="loading" type="success"
  @click="loadData(false)">加载有数据</mz-button>
<mz-state v-model="state">
  <template #loading>加载中</template>
  <template #empty>空的</template>
  <template #success>{{list.join(',')}}</template>
</mz-state>

<script>
export default {
  data() {
    return {
      loading: false,
      list: []
    }
  },

  computed: {
    state() {
      if(this.loading){
        return 'loading'
      }
      return this.list.length ? 'success' :'empty'
    }
  },

  methods:{
    loadData(empty) {
      this.loading = true
      setTimeout(() => {
        this.list = empty ? [] : ['小明', '小红']
        this.loading = false 
      }, 1500)
    }
  }
}
</script>

<style>
.mz-button + .mz-button{
  margin-left: 10px;
}
.mz-state{
  margin-top: 10px;
}
</style>
```
:::