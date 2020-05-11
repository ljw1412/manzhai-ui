## Tooltip 提示文字

常用于用户使用鼠标与元素交互时，显示的对被交互元素起提示作用的信息。

### 基础用法
:::demo
```html
<div>
  <div class="box">
    <div v-for="(list, name) in data" :key="name" :class="name">
      <mz-tooltip v-for="item in list"
        :placement="item.placement"
        :key="item.placement"
        :content="item.content">
        <mz-button width="100px" height="40px"
          color="primary">{{item.placement}}</mz-button>
      </mz-tooltip>
    </div>
  </div>
</div>



<style>
.box{
  width: 540px;
}
.top {
  padding-left: 110px;
}
.left {
  float: left;
  width: 100px;
}
.right {
  float: right;
  width: 100px;
}
.bottom {
  clear: both;
  margin: auto;
  padding-left: 110px;
}
.mz-button{
  margin: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      data: {
        top: [
          { placement: 'top-start', content: 'top-start 提示文字' },
          { placement: 'top', content: 'top 提示文字' },
          { placement: 'top-end', content: 'top-end 提示文字' }
        ],
        left: [
          { placement: 'left-start', content: 'left-start 提示文字' },
          { placement: 'left', content: 'left 提示文字' },
          { placement: 'left-end', content: 'left-end 提示文字' }
        ],
        right: [
          { placement: 'right-start', content: 'right-start 提示文字' },
          { placement: 'right', content: 'right 提示文字' },
          { placement: 'right-end', content: 'right-end 提示文字' }
        ],
        bottom: [
          { placement: 'bottom-start', content: 'bottom-start 提示文字' },
          { placement: 'bottom', content: 'bottom 提示文字' },
          { placement: 'bottom-end', content: 'bottom-end 提示文字' }
        ]
      }
    }
  }
}
</script>
```
:::

