## Tooltip 提示文字

常用于用户使用鼠标与元素交互时，显示的对被交互元素起提示作用的信息。

### 基本用法
:::demo
```html
<mz-tooltip content="测试">
  <mz-button>测试</mz-button>
  <mz-button>测试</mz-button>
</mz-tooltip>
<mz-tooltip>
  <mz-button>测试</mz-button>
  <div slot="content">
    <h2>标题</h2>
    <div>内容</div>
  </div>
</mz-tooltip>
```
:::