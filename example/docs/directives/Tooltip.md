## Tooltip 提示文字

简单的提示文字处理，如果要进行自定义请使用组件[Tooltip](component-tooltip)

### 基础用法
:::demo `v-tooltip`直接传入字符串。
```html
<mz-button v-tooltip="'文字'">按钮</mz-button>
```
:::

### 使用主题
:::demo `v-tooltip`可以使用修饰符来快速切换主题，如果有多个默认以单词字母排序的第一位。可选值`light`、`light-border`、`material`、`translucent`
```html
<mz-tag v-tooltip="'文字'">默认</mz-tag>
<mz-tag v-tooltip.light="'文字'">light</mz-tag>
<mz-tag v-tooltip.light-border="'文字'">light-border</mz-tag>
<mz-tag v-tooltip.material="'文字'">material</mz-tag>
<mz-tag v-tooltip.translucent="'文字'">translucent</mz-tag>
```
:::

### 进阶用法

您也可以向`v-tooltip`传入一个对象，对象的[属性](**_blank**https://atomiks.github.io/tippyjs/v6/all-props/)。

:::demo tooltip基于开源项目[`Tippy.js`](**_blank**https://github.com/atomiks/tippyjs)进行简单封装。
```html
<mz-row flex>
  <mz-col style="width: 60px">
    <mz-icon name="md-cog" size="26"
      v-tooltip="options"></mz-icon>
  </mz-col>
  <mz-col style="width: calc(100% - 60px);height:200px;overflow-y:auto;">
    <mz-input v-model="options.content"></mz-input>
  </mz-col>
</mz-row>

<script>
export default {
  data() {
    return {
      options:{
        content: '内容'
      }
    }
  }
}
</script>
```
:::