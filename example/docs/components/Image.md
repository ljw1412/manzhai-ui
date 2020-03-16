## Image 图片

显示图片或背景的容器。

### 基本语法

既可以作为图片显示，也可以作为背景显示。

:::demo `background`属性为true，image将或以背景模式显示图片。
```html
<mz-image :src="src"
  width="100px"
  height='100px'></mz-image>
<mz-image background
  :src="src"
  width="100px"
  height='100px'></mz-image>

<script>
export default {
  data() {
    return {
      src: require('@/static/image-star.jpg')
    }
  }
}
</script>

<style lang="scss">
.mz-image {
  border: 1px solid var(--color-border-base);
}
.mz-image {
  margin: 10px;
}
</style>
```
:::


### 图片调整

可以调整图片的适应容器的情况和图片的位置。

:::demo 可通过`fit`确定图片如何适应到容器框，图片模式同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)，背景模式同原生 [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)。可通过`position`确定图片在容器的位置，图片模式同原生 [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)，背景模式同原生 [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
```html
<mz-image :src="src"
  :fit="fit"
  :position="position"
  width="100px"
  height='100px'></mz-image>
<mz-image background
  :src="src"
  :fit="fit"
  :position="position"
  width="100px"
  height='100px'></mz-image>
<mz-input v-model="fit" label="fit" placeholder="可选值：'fill', 'contain', 'cover', 'none', 'scale-down'"/>
<mz-input v-model="position" label="position" placeholder="可选值：'top', 'bottom', 'left', 'right', 'center'"/>

<script>
export default {
  data() {
    return {
      fit: '',
      position: '',
      src: require('@/static/image-star.jpg')
    }
  }
}
</script>

<style lang="scss">
.mz-image {
  border: 1px solid var(--color-border-base);
}
.mz-image {
  margin: 10px;
}
</style>
```
:::

### API

#### 属性

| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|background|是否为背景|Boolean|||
|src|图片源，同原生|String|||
|width|图片宽|String|||
|height|图片高|String|||
|fit|确定图片如何适应容器框|String|图片模式：fill / contain / cover / none / scale-down，背景模式：contain / cover||
|position|图片的定位|String|top / bottom / left / right / center||
|alt|原生 alt|String|||
|referrerPolicy|原生 referrerPolicy|String|||

#### 事件

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|load|图片加载成功触发|(e: Event)|
|error|图片加载失败触发|(e: Error)|

#### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
|-|仅在背景模式有效，容器内容||