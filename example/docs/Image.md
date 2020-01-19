## 图片

### 基本语法

:::demo
```html
<mz-input v-model="src" label="图片地址"/>
<br>
<mz-image :src="src"
  width="100px"
  height='100px'
  fit="contain"></mz-image>
<br>
<mz-image background
  :src="src"
  width="100px"
  height='100px'
  fit="contain"></mz-image>

<script>
export default {
  data() {
    return {
      src: 'https://www.baidu.com/img/bd_logo1.png'
    }
  }
}
</script>
```
:::