## Pagination 分页

以分页的形式，展示大量的数据。

:::demo
```html
<mz-pagination v-model="index" 
  :page-size="size" :total="total"></mz-pagination>

<script>
export default {
  data (){
    return {
      index: 1,
      size: 10,
      total: 200
    }
  }
}
</script>
```
:::