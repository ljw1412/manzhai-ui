## Drawer 抽屉

屏幕边缘滑出的浮层面板。

### 基础用法
:::demo
```html
<mz-filter-section v-model="placement"
  label="抽屉弹出位置：" label-position="right">
  <mz-filter-section-item v-for="item of placementList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>
<mz-button color="success"
  @click="visible = true">显示抽屉</mz-button>
<mz-drawer v-model="visible" :placement="placement"></mz-drawer>

<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'right',
      placementList: ['top', 'bottom', 'left', 'right']
    }
  }
}
</script>
```
:::