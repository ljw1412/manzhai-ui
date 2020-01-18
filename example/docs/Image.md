## 图片

### 基本语法

:::demo
```html
图片地址：<input v-model="src" />
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