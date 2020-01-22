## Snackbar 消息条

用于页面中展示消息。

### 基本用法
::: demo 消息条默认显示5秒。
```html
<mz-snackbar v-model="isShow" text="这是一条测试消息。"></mz-snackbar>
<mz-button @click="isShow = true">显示</mz-button>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>
```
:::


### 手动关闭

使用手动模式关闭消息框。

::: demo `timeout`为0时不会自动关闭。`buttonText`属性值有效，会显示一个操作按钮，点击时会传递出`buttonClick`事件。
```html
<mz-snackbar v-model="isShow"
  text="这是一条测试消息。"
  buttonText="关闭"
  :timeout="0"
  @buttonClick="isShow = false"></mz-snackbar>
<mz-button @click="isShow = true">显示</mz-button>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>
```
:::

### 多行布局
::: demo `vertical`属性值控制布局的显示效果。
```html
<mz-snackbar v-model="isShow"
  vertical
  text="这是一条测试消息。"
  buttonText="关闭"
  :timeout="0"
  @buttonClick="isShow = false"></mz-snackbar>
<mz-button @click="isShow = true">显示</mz-button>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>
```
:::

### 固定和位置

让消息框在全局固定位置显示。

::: demo `fixed`控制是否固定，`placement`控制消息框在界面的位置。
```html
<mz-snackbar v-model="isShow"
  fixed
  text="这是一条测试消息。"
  buttonText="关闭"
  :timeout="0"
  :placement="placement"
  @buttonClick="isShow = false"></mz-snackbar>
<mz-button type="primary" @click="isShow = true">显示</mz-button>
<br><br>
<mz-filter-section v-model="placement" label="placement">
  <mz-filter-section-item v-for="item of placementList"
    :key="item"
    :value="item"></mz-filter-section-item>
</mz-filter-section>

<script>
export default {
  data() {
    return {
      isShow: false,
      placementList: [ 'top','top-start', 'top-end', 'center', 'bottom', 'bottom-start',  'bottom-end' ],
      placement: 'bottom'
    }
  }
}
</script>
```
:::

### 全局方法

ManZhai 为 Vue.prototype 添加了全局方法 $snackbar。因此在 vue instance 中可以采用本页面中的方式调用 Message。

::: demo 方法`show`里传的config，与组件Snackbar的属性值完全一致。
```html
<mz-button @click="onClick">显示</mz-button>

<script>
export default {
  methods:{
    onClick() {
      this.$snackbar.show({
        text: '测试',
        buttonText: '关闭',
        buttonProps: { fontColor: '#ffffff', flat: true },
        buttonClick: function() {
          this.close()
        },
        placement: 'bottom'
      })
    }    
  }
}
</script>
```
:::


