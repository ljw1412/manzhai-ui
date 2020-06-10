## Pagination 分页

以分页的形式，展示大量的数据。

:::demo
```html
<mz-pagination v-model="index" 
  :page-size="10" :total="70"></mz-pagination>

<mz-pagination v-model="index2" 
  :page-size="10" :total="198"></mz-pagination>

<script>
export default {
  data (){
    return {
      index: 1,
      index2: 1
    }
  }
}
</script>
```
:::