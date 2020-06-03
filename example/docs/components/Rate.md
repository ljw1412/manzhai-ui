## Rate 评分

评分组件。

### 基础用法

:::demo `allow-half`控制是否允许半分。如果为 true 满分 10，否则为 5。
```html
<div class="demo-font-size-14">正常</div>
<mz-rate v-model="value"/>
<div class="demo-font-size-14">允许半星</div>
<mz-rate v-model="value2" allow-half/>

<script>
export default {
  data() {
    return {
      value: 0,
      value2: 0
    }
  }
}
</script>
```
:::


### 显示文字

:::demo `show-text`控制是否在尾部显示分数。你也可以传入格式化方法`format`来修改显示文案。
```html
<mz-rate v-model="value" show-text/>
<br />
<mz-rate v-model="value2" show-text allow-half/>
<br />
<mz-rate v-model="value3" show-text :format="format"/>

<script>
export default {
  data() {
    return {
      value: 5,
      value2: 4.5,
      value3: 0
    }
  },

  methods:{
    format(score){
      const texts = ['未评价', '极差', '失望', '一般', '满意', '惊喜']
      return texts[score]
    }
  }
}
</script>
```
:::

### 只读

:::demo `readonly`属性控制该评分是否只读。
```html
<mz-rate v-model="value" readonly exact show-text/>

<script>
export default {
  data() {
    return {
      value: 3.7
    }
  }
}
</script>
```
:::