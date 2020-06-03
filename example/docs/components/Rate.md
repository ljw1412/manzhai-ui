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

### 自定义图标

支持[Icon组件](component-icon)的图标。

:::demo `icon`属性控制图标。
```html
<mz-rate icon="airplane-outline" allow-half/>
<br />
<mz-rate icon="football" allow-half/>
<br />
<mz-rate icon="snow" allow-half/>
<br />
<mz-rate :icon="icon" allow-half/>

<script>
export default {
  methods: {
    icon(score){
      if(score <= 2){
        return 'skull'
      } else if(score <= 4){
        return 'sad'
      } else {
        return 'happy'
      }
    }
  }
}
</script>
```
:::

### 图标颜色

:::demo `color`属性控制选中时的颜色，`voidColor`显示未选中时的颜色。
```html
<mz-rate void-color="black" color="blue"/>
<br />
<mz-rate  void-color="black" :color="color"/>

<script>
export default {
  methods: {
    color(score){
      if(score < 3){
        return 'red'
      } else if(score < 5){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
}
</script>
```
:::


### 显示文案

:::demo `show-text`控制是否在尾部显示分数，`format`来格式化显示文案，`text-color`控制文案颜色。
```html
<mz-rate v-model="value" show-text text-color="blue"/>
<br />
<mz-rate v-model="value2" show-text allow-half :text-color="color"/>
<br />
<mz-rate v-model="value3" show-text :format="format" :text-color="color"/>

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
    },

    color(score){
      if(score < 2){
        return 'red'
      } else if(score < 4){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
}
</script>
```
:::

### 只读

:::demo `readonly`属性控制该评分是否只读。此时值可以为任意的一位小数的数值。
```html
<mz-rate :value="value" readonly show-text/>

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

### 设置最大值

:::demo `max`属性控制最大得分，其值必须是5的非零倍数。
```html
<mz-rate v-model="value" allow-half show-text :max="10"/>
<br />
<mz-rate v-model="value2" allow-half show-text :max="15"/>
<br />
<mz-rate v-model="value3" allow-half show-text :max="100"/>

<script>
export default {
  data() {
    return {
      value: 5,
      value2: 12,
      value3: 100
    }
  },

  methods: {
    color(score){
      if(score < 3){
        return 'red'
      } else if(score < 5){
        return 'orange'
      } else {
        return 'green'
      }
    }
  }
}
</script>
```
:::


### API
| 参数 | 说明 | 类型 | 可选值 |默认值|
| --- | --- | --- | --- | --- |
|value/v-model|绑定值|Number|||
|max|最大值，5的非零倍数|Number||5|
|size|图标大小|Number|||
|allow-half|是否允许半选|Boolean||false|
|readonly|是否为只读|Boolean||false|
|show-text|是否显示评分文案|Boolean||false|
|format|格式化评分文案|(val: number) => any||(val) => val|
|icon|图标|String / (val: number) => string||'star'|
|color|图标选中颜色|String / (val: number) => string||'#F7BA2A'|
|void-color|图标未选中颜色|String||'#E8E8E8'|
|text-color|评分文案颜色|String / (val: number) => string||''|


