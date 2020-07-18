## Menu 导航菜单

为页面和功能提供导航的菜单列表。

### 基础用法
:::demo
```html
<mz-menu>
  <mz-menu-item title="测试" prefix="rocket"></mz-menu-item>
  <mz-menu-item title="测试" prefix="rocket" text="描述文字">
    <template #title>标题</template>
  </mz-menu-item>
</mz-menu>
```
:::

### 水平导航栏

:::demo
```html
<mz-menu placement="top">
  <mz-menu-item v-for="i of 10" :key="i" title="测试" prefix="rocket"></mz-menu-item>
  <mz-menu-item title="禁用" prefix="rocket" disabled></mz-menu-item>
  <mz-menu-item title="测试" prefix="rocket" text="描述文字">
    <template #title>标题</template>
  </mz-menu-item>
</mz-menu>
```
:::