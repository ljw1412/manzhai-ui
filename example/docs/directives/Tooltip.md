## Tooltip 提示文字

简单的提示文字处理，如果要进行自定义请使用组件[Tooltip](component-tooltip)

### 基础用法
:::demo `v-tooltip`直接传入字符串。
```html
<mz-button v-tooltip="'文字'">按钮</mz-button>
```
:::

### 进阶用法

您也可以向`v-tooltip`传入一个对象，对象的[属性](**_blank**https://atomiks.github.io/tippyjs/v6/all-props/)。

:::demo tooltip基于开源项目[`Tippy.js`](**_blank**https://github.com/atomiks/tippyjs)进行简单封装。
```html
<mz-row flex class="align-items-center">
  <mz-col style="width: 80px; text-align: center;">
    <a v-tooltip="options" target="_blank"
      href="https://atomiks.github.io/tippyjs/v6/all-props/">
      <mz-icon name="cog" size="26"></mz-icon>
      <div>更多属性</div>
    </a>
  </mz-col>
  <mz-col style="width: calc(100% - 80px);">
    <div class="option">
      <span class="demo-font-size-14">内容：</span>
      <mz-input v-model="options.content" style="margin-right: 20px;"></mz-input>
    </div>
    <div class="option">
      <span class="demo-font-size-14">主题：</span>
      <mz-select v-model="options.theme" style="margin-right: 20px;">
        <mz-option value="" label="默认"></mz-option>
        <mz-option v-for="theme of themes" :value="theme" :key="theme"></mz-option>
      </mz-select>
    </div>
    <div class="option">
    <span class="demo-font-size-14">位置：</span>
      <mz-select v-model="options.placement" style="margin-right: 20px;">
        <mz-option v-for="placement of placements" :value="placement" :key="placement"></mz-option>
      </mz-select>
    </div>
  </mz-col>
</mz-row>

<script>
export default {
  data() {
    return {
      themes: ['light', 'light-border', 'material', 'translucent'],
      placements: [ 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end' ],
      options: {
        content: '内容',
        theme: '',
        placement: 'top'
      }
    }
  }
}
</script>

<style>
.mz-input {
  width: 150px;
}

a {
  color: #409eff;
  font-size: 14px;
  margin-top: 10px;
}

a:hover{
  opacity: 0.9;
}

.option{
  display: inline-block;
}
</style>
```
:::

### 修饰符

**主题:** `light`, `light-border`, `material`, `translucent`

**箭头:** `arrow`

**触发:** `hover`, `focus`, `click`

**位置:** `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`

:::demo 
```html
<div class="modifiers">
  <mz-tag v-tooltip="'文字'">默认</mz-tag>
  <mz-tag v-tooltip.light="'light'">light</mz-tag>
  <mz-tag v-tooltip.light-border="'light-border'">light-border</mz-tag>
  <mz-tag v-tooltip.material="'material'">material</mz-tag>
  <mz-tag v-tooltip.translucent="'translucent'">translucent</mz-tag>
</div>
<div class="modifiers">
  <mz-tag v-tooltip.arrow="'arrow'">箭头</mz-tag>
  <mz-tag v-tooltip.arrow.light="'light'">light</mz-tag>
  <mz-tag v-tooltip.arrow.light-border="'light-border'">light-border</mz-tag>
  <mz-tag v-tooltip.arrow.material="'material'">material</mz-tag>
  <mz-tag v-tooltip.arrow.translucent="'translucent'">translucent</mz-tag>
</div>
<div class="modifiers">
  <mz-button v-tooltip.hover="'hover'">hover</mz-button>
  <mz-button v-tooltip.focus="'focus'">focus</mz-button>
  <mz-button v-tooltip.click="'click'">click</mz-button>
</div>
<mz-row :gutter="10">
  <mz-col :span="6">
    <div v-tooltip.top="'top'">top</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.top-start="'top-start'">top-start</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.top-end="'top-end'">top-end</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.right="'right'">right</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.right-start="'right-start'">right-start</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.right-end="'right-end'">right-end</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.bottom="'bottom'">bottom</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.bottom-start="'bottom-start'">bottom-start</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.bottom-end="'bottom-end'">bottom-end</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.left="'left'">left</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.left-start="'left-start'">left-start</div>
  </mz-col>
  <mz-col :span="6">
    <div v-tooltip.left-end="'left-end'">left-end</div>
  </mz-col>
</mz-row>

<style>
.modifiers > .mz-tag, .modifiers > .mz-button {
  margin-bottom: 10px;
}

.mz-col {
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #5183f5;
  margin-bottom: 10px;
}

.mz-col > div {
  border: 2px dashed #5183f5;
  transition: background-color 0.2s,color 0.1s;
}
.mz-col > div:hover {
  color: #fff;
  background-color: #5183f5;
}
</style>
```
:::