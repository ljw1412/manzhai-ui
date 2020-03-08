## State 状态变化

根据状态显示不同内容

### 基础用法

根据状态切换呈现的内容。

:::demo `value`表示当前状态，它的可选值与你所使用的插槽名称对应。(以下面的Demo为例，此时可选值为`loading`、`empty`、`success`)
```html
<mz-button outlined :disabled="loading" type="danger"
  @click="loadData(true)">加载空数据</mz-button>
<mz-button outlined :disabled="loading" type="success"
  @click="loadData(false)">加载有数据</mz-button>
<mz-state :value="state">
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

### 多状态

同时呈现多状态的内容。

:::demo `value`以`,`分隔表示多状态。
```html
<mz-filter-section label="状态："
  multiple
  label-position="right"
  v-model="state">
  <mz-filter-section-item v-for="item of stateList"
    :key="item"
    :value="item">{{ item }}
  </mz-filter-section-item>
</mz-filter-section>
<mz-state :value="stateStr">
  <template #left><span>left</span></template>
  <template #center><span>center</span></template>
  <template #right><span>right</span></template>
</mz-state>

<script>
export default {
  data() {
    return {
      state: [],
      stateList: ['left', 'center', 'right']
    }
  },
  computed: {
    stateStr() {
      return this.state.join(',')
    }
  },
}
</script>

<style>
.mz-state{
  span + span{
    margin-left: 10px;
  }
}
</style>
```
:::

### API

#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value|当前状态,多种状态用','隔开|String|||

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|任意|插槽名称与value对应时显示||