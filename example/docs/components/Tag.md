## Tag 标签

进行标记和分类的小标签。

### 基础用法

可以自定义标签颜色。

:::demo `color`控制标签背景颜色,`text-color`控制标签文本颜色。
```html
<mz-tag>标签</mz-tag>
<mz-tag color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
<mz-tag color="var(--color-warning)" text-color="green">标签</mz-tag>
```
:::


### 尺寸

4种尺寸大小的标签。

:::demo `size`可以控制尺寸，可选值`small`、`medium`、`large`。
```html
<mz-tag size="small">标签</mz-tag>
<mz-tag size="medium">标签</mz-tag>
<mz-tag>标签</mz-tag>
<mz-tag size="large">标签</mz-tag>
```
:::

### 形态

多种样式形态的标签。

:::demo `outlined`、`round`、`text`分别表示以边框模式，圆角模式，文字模式显示。
```html
<mz-tag outlined>标签</mz-tag>
<mz-tag round color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
<mz-tag round="left" color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
<mz-tag round="right" color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
<mz-tag text color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
<mz-tag outlined round color="var(--color-primary)" text-color="#ffffff">标签</mz-tag>
```
:::

### 可增删的标签

支持动态新增和删除标签

:::demo `closable`属性控制标签能否被删除，点击删除图标返回`v-on:close`事件。
```html
<mz-tag v-for="(item, index) of list" 
  :key="index"
  closable
  @close="handleColse(item)">
  {{item.label}}
</mz-tag>
<mz-tag class="is-pointer" @click="list.push({label: '新增'})">+新增</mz-tag>

<script>
export default {
  data() {
    return {
      list:[
        { label:'标签1' },
        { label:'标签2' },
        { label:'标签3' },
      ]
    }
  },

  methods:{
    handleColse(item){
      const index = this.list.indexOf(item)
      if(~index){
        this.list.splice(index, 1)
      }
    }
  }
}
</script>
```
:::

### 前后置内容

在标签内容前后插入其它内容。

:::demo `prefix`、`suffix`使用前后置插槽在标签名称前后插入内容。
```html
<mz-tag>
  <mz-icon slot="prefix" name="md-bookmark"></mz-icon>
  标签
</mz-tag>
<mz-tag>
  标签
  <mz-icon slot="suffix" name="md-flask"></mz-icon>
</mz-tag>
```
:::

### Api
#### 属性
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|color|背景颜色|String|||
|textColor|文本颜色|String|||
|closable|是否可以关闭|Boolean|||
|outlined|是否为空心|Boolean|||
|round|是否为圆角|Boolean/String|true / 'left' / 'right'||
|text|是否为文字|Boolean|||

#### 插槽
| 名称 | 说明 | 参数 |
| --- | --- | --- |
| 默认 |标签内容||
|prefix|前置内容||
|suffix|后置内容||

#### 事件
| 名称 | 说明 | 参数 |
| --- | --- | --- |
|click|标签点击事件|(event:Event)|
|close|关闭事件，在允许关闭的时候有效||