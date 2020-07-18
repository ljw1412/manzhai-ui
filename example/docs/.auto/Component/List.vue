<template>
  <div class="component-list">
    <div class="update-datetime">文档更新时间：2020-07-18 14:06</div>
    <h2
      id="list-lie-biao"
      class="mz-heading mz-document-heading"
      data-level="2"
    >
      <a
        class="mz-document-anchor"
        href="#list-lie-biao"
        title="List 列表"
        data-level="2"
        data-href="#list-lie-biao"
        >¶</a
      >List 列表
    </h2>
    <p>以列的布局展示数据。</p>
    <h3
      id="ji-chu-yong-fa"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#ji-chu-yong-fa"
        title="基础用法"
        data-level="3"
        data-href="#ji-chu-yong-fa"
        >¶</a
      >基础用法
    </h3>
    <demo-block>
      <template #example
        ><list-demo1 inline-template
          ><div class="list-demo1">
            <mz-card width="300px" class="m-auto">
              <mz-list>
                <mz-list-item title="所有人" text="来个火箭">
                  <mz-icon slot="prefix" name="at" size="30"></mz-icon>
                </mz-list-item>
                <mz-list-item title="666666" text="可以的">
                  <mz-icon slot="suffix" name="rocket" size="30"></mz-icon>
                </mz-list-item>
              </mz-list>
            </mz-card></div></list-demo1
      ></template>
      <template #description></template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-card width=&quot;300px&quot; class=&quot;m-auto&quot;&gt;
  &lt;mz-list&gt;
    &lt;mz-list-item title=&quot;所有人&quot; text=&quot;来个火箭&quot;&gt;
      &lt;mz-icon slot=&quot;prefix&quot; name=&quot;at&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
    &lt;mz-list-item title=&quot;666666&quot; text=&quot;可以的&quot;&gt;
      &lt;mz-icon slot=&quot;suffix&quot; name=&quot;rocket&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
  &lt;/mz-list&gt;
&lt;/mz-card&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3 id="fen-ge-xian" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#fen-ge-xian"
        title="分割线"
        data-level="3"
        data-href="#fen-ge-xian"
        >¶</a
      >分割线
    </h3>
    <demo-block>
      <template #example
        ><list-demo2 inline-template
          ><div class="list-demo2">
            <mz-card width="300px" class="m-auto">
              <mz-list divider>
                <mz-list-item title="所有人" text="来个火箭">
                  <mz-icon slot="prefix" name="at" size="30"></mz-icon>
                </mz-list-item>
                <mz-list-item title="?????" text="被墙了o(╥﹏╥)o">
                  <mz-icon slot="suffix" name="rocket" size="30"></mz-icon>
                </mz-list-item>
              </mz-list>
            </mz-card></div></list-demo2
      ></template>
      <template #description
        ><p><code>divider</code>可以控制列表是否带有分割线。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-card width=&quot;300px&quot; class=&quot;m-auto&quot;&gt;
  &lt;mz-list divider&gt;
    &lt;mz-list-item title=&quot;所有人&quot; text=&quot;来个火箭&quot;&gt;
      &lt;mz-icon slot=&quot;prefix&quot; name=&quot;at&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
    &lt;mz-list-item title=&quot;?????&quot; text=&quot;被墙了o(╥﹏╥)o&quot;&gt;
      &lt;mz-icon slot=&quot;suffix&quot; name=&quot;rocket&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
  &lt;/mz-list&gt;
&lt;/mz-card&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="ke-yi-dian-ji"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#ke-yi-dian-ji"
        title="可以点击"
        data-level="3"
        data-href="#ke-yi-dian-ji"
        >¶</a
      >可以点击
    </h3>
    <demo-block>
      <template #example
        ><list-demo3 inline-template
          ><div class="list-demo3">
            <mz-card width="300px" class="m-auto">
              <mz-list clickable>
                <mz-list-item title="所有人" text="来个火箭">
                  <mz-icon slot="prefix" name="at" size="30"></mz-icon>
                </mz-list-item>
                <mz-list-item title="666666" text="可以的">
                  <mz-icon slot="suffix" name="rocket" size="30"></mz-icon>
                </mz-list-item>
              </mz-list>
            </mz-card></div></list-demo3
      ></template>
      <template #description
        ><p><code>clickable</code>控制能否点击的效果。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-card width=&quot;300px&quot; class=&quot;m-auto&quot;&gt;
  &lt;mz-list clickable&gt;
    &lt;mz-list-item title=&quot;所有人&quot; text=&quot;来个火箭&quot;&gt;
      &lt;mz-icon slot=&quot;prefix&quot; name=&quot;at&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
    &lt;mz-list-item title=&quot;666666&quot; text=&quot;可以的&quot;&gt;
      &lt;mz-icon slot=&quot;suffix&quot; name=&quot;rocket&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
  &lt;/mz-list&gt;
&lt;/mz-card&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="lie-biao-yuan-su-jian-ge"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#lie-biao-yuan-su-jian-ge"
        title="列表元素间隔"
        data-level="3"
        data-href="#lie-biao-yuan-su-jian-ge"
        >¶</a
      >列表元素间隔
    </h3>
    <demo-block>
      <template #example
        ><list-demo4 inline-template
          ><div class="list-demo4">
            <mz-list width="300px" class="m-auto" gutter="10px">
              <mz-list-item v-for="i of 4" :key="i">
                <mz-card height="50px"
                  ><span>我是卡片{{ i }}</span></mz-card
                >
              </mz-list-item>
            </mz-list>
          </div></list-demo4
        ></template
      >
      <template #description
        ><p><code>gutter</code>可以控制列表元素间的间距。</p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-list width=&quot;300px&quot; class=&quot;m-auto&quot; gutter=&quot;10px&quot;&gt;
  &lt;mz-list-item v-for=&quot;i of 4&quot; :key=&quot;i&quot;&gt;
    &lt;mz-card height=&quot;50px&quot;&gt;&lt;span&gt;我是卡片{{i}}&lt;/span&gt;&lt;/mz-card&gt;
  &lt;/mz-list-item&gt;
&lt;/mz-list&gt;

&lt;style&gt;
.mz-card{
  display: flex;
}
.mz-card &gt; span{
  margin: auto;
}
&lt;/style&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="jin-yong-lie-biao"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#jin-yong-lie-biao"
        title="禁用列表"
        data-level="3"
        data-href="#jin-yong-lie-biao"
        >¶</a
      >禁用列表
    </h3>
    <demo-block>
      <template #example
        ><list-demo5 inline-template
          ><div class="list-demo5">
            <mz-card width="300px">
              <mz-list disabled>
                <mz-list-item title="所有人" text="来个火箭">
                  <mz-icon slot="prefix" name="at" size="30"></mz-icon>
                </mz-list-item>
                <mz-list-item title="5555555" text="被禁用不可以">
                </mz-list-item>
              </mz-list>
            </mz-card>

            <mz-card width="300px">
              <mz-list>
                <mz-list-item title="所有人" text="来个火箭">
                  <mz-icon slot="prefix" name="at" size="30"></mz-icon>
                </mz-list-item>
                <mz-list-item disabled title="5555555" text="被禁用不可以">
                </mz-list-item>
              </mz-list>
            </mz-card></div></list-demo5
      ></template>
      <template #description
        ><p>
          List的<code>disabled</code>属性可以控制整个列表的禁用状态。也可以单独控制ListItem。
        </p>
      </template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-card width=&quot;300px&quot;&gt;
  &lt;mz-list disabled&gt;
    &lt;mz-list-item title=&quot;所有人&quot; text=&quot;来个火箭&quot;&gt;
      &lt;mz-icon slot=&quot;prefix&quot; name=&quot;at&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
    &lt;mz-list-item title=&quot;5555555&quot; text=&quot;被禁用不可以&quot;&gt;
    &lt;/mz-list-item&gt;
  &lt;/mz-list&gt;
&lt;/mz-card&gt;

&lt;mz-card width=&quot;300px&quot;&gt;
  &lt;mz-list&gt;
    &lt;mz-list-item title=&quot;所有人&quot; text=&quot;来个火箭&quot;&gt;
      &lt;mz-icon slot=&quot;prefix&quot; name=&quot;at&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
    &lt;mz-list-item disabled title=&quot;5555555&quot; text=&quot;被禁用不可以&quot;&gt;
    &lt;/mz-list-item&gt;
  &lt;/mz-list&gt;
&lt;/mz-card&gt;

&lt;style&gt;
.mz-card {
  display: inline-block;
}
.mz-card + .mz-card {
  margin-left: 10px;
}
&lt;/style&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="ke-dian-ji-de-lie-biao"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#ke-dian-ji-de-lie-biao"
        title="可点击的列表"
        data-level="3"
        data-href="#ke-dian-ji-de-lie-biao"
        >¶</a
      >可点击的列表
    </h3>
    <demo-block>
      <template #example
        ><list-demo6 inline-template
          ><div class="list-demo6">
            <mz-list
              v-model="value"
              width="300px"
              class="m-auto"
              @change="change"
              @item-click="itemClick"
            >
              <mz-list-item
                v-for="item of list"
                :item="item"
                :key="item.value"
                :value="item.value"
                :disabled="item.disabled"
              >
                <mz-card height="50px"
                  ><span>我是{{ item.title }}</span></mz-card
                >
              </mz-list-item>
            </mz-list>
            <div class="demo-font-size-14">当前值：{{ value }}</div>
            <div class="demo-font-size-14">
              上一次改变(change)：{{ changeItem }}
            </div>
            <div class="demo-font-size-14">
              点击对象(item-click)：{{ currentItem }}
            </div>
          </div></list-demo6
        ></template
      >
      <template #description
        ><p>
          当<code>list</code>有<code>value/v-model</code>属性时，进入选择模式，且<code>list-item</code>的<code>value</code>属性不能为<code>undefined</code>，使用<code>list-item</code>的<code>item</code>属性传入任意相关数据。
        </p>
      </template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-list v-model=&quot;value&quot; 
  width=&quot;300px&quot; class=&quot;m-auto&quot;
  @change=&quot;change&quot; @item-click=&quot;itemClick&quot;&gt;
  &lt;mz-list-item v-for=&quot;item of list&quot;
    :item=&quot;item&quot;
    :key=&quot;item.value&quot; 
    :value=&quot;item.value&quot;
    :disabled=&quot;item.disabled&quot;&gt;
    &lt;mz-card height=&quot;50px&quot;&gt;&lt;span&gt;我是{{item.title}}&lt;/span&gt;&lt;/mz-card&gt;
  &lt;/mz-list-item&gt;
&lt;/mz-list&gt;
&lt;div class=&quot;demo-font-size-14&quot;&gt;当前值：{{value}}&lt;/div&gt;
&lt;div class=&quot;demo-font-size-14&quot;&gt;上一次改变(change)：{{changeItem}}&lt;/div&gt;
&lt;div class=&quot;demo-font-size-14&quot;&gt;点击对象(item-click)：{{currentItem}}&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: '',
      currentItem:{},
      changeItem:{},
      list: [
        {title:'甲',value:1,disabled:false},
        {title:'乙(禁用)',value:2,disabled:true},
        {title:'丙',value:3,disabled:false},
        {title:'丁',value:4,disabled:false},
      ]
    }
  },
  methods:{
    change(value, item) {
      this.changeItem = item
    },
    itemClick(value, item, disabled) {
      this.currentItem = item
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.mz-card{
  display: flex;
}
.mz-card &gt; span{
  margin: auto;
}
&lt;/style&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3
      id="bu-tong-da-xiao"
      class="mz-heading mz-document-heading"
      data-level="3"
    >
      <a
        class="mz-document-anchor"
        href="#bu-tong-da-xiao"
        title="不同大小"
        data-level="3"
        data-href="#bu-tong-da-xiao"
        >¶</a
      >不同大小
    </h3>
    <demo-block>
      <template #example
        ><list-demo7 inline-template
          ><div class="list-demo7">
            <mz-card v-for="size of sizeList" width="200px" :key="size">
              <mz-list :size="size">
                <mz-list-item title="所有人" text="来个火箭">
                  <mz-icon slot="prefix" name="at" size="30"></mz-icon>
                </mz-list-item>
                <mz-list-item title="666666" text="可以的">
                  <mz-icon slot="suffix" name="rocket" size="30"></mz-icon>
                </mz-list-item>
              </mz-list>
            </mz-card></div></list-demo7
      ></template>
      <template #description
        ><p>
          <code>size</code
          >属性控制列表的大小，可选值<code>small</code>、<code>medium</code>、<code>(默认)</code>、<code>large</code>。
        </p>
      </template>
      <template #highlight
        >><pre
          v-pre
        ><code class="html">&lt;mz-card v-for=&quot;size of sizeList&quot;
   width=&quot;200px&quot; :key=&quot;size&quot;&gt;
  &lt;mz-list :size=&quot;size&quot;&gt;
    &lt;mz-list-item title=&quot;所有人&quot; text=&quot;来个火箭&quot;&gt;
      &lt;mz-icon slot=&quot;prefix&quot; name=&quot;at&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
    &lt;mz-list-item title=&quot;666666&quot; text=&quot;可以的&quot;&gt;
      &lt;mz-icon slot=&quot;suffix&quot; name=&quot;rocket&quot; size=&quot;30&quot;&gt;&lt;/mz-icon&gt;
    &lt;/mz-list-item&gt;
  &lt;/mz-list&gt;
&lt;/mz-card&gt;

&lt;script&gt;
export default {
  data() {
    return {
      sizeList: ['small','medium','','large']
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.mz-card {
  display: inline-block;
}
.mz-card + .mz-card {
  margin-left: 10px;
}
&lt;/style&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3 id="qian-tao" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#qian-tao"
        title="嵌套"
        data-level="3"
        data-href="#qian-tao"
        >¶</a
      >嵌套
    </h3>
    <demo-block>
      <template #example
        ><list-demo8 inline-template
          ><div class="list-demo8">
            <mz-card width="300px">
              <mz-list v-model="value" divider clickable>
                <mz-list-item-group title="列表组">
                  <mz-list-item
                    v-for="item of list"
                    :key="item.value"
                    :title="item.title"
                    :value="item.value"
                    :item="item"
                  ></mz-list-item>
                </mz-list-item-group>
                <mz-list-item-group title="列表组2">
                  <mz-list-group label="标签名称">
                    <mz-list-item
                      v-for="item of list"
                      :key="item.value"
                      :title="item.title"
                      :value="item.value + 3"
                      :item="item"
                    ></mz-list-item>
                  </mz-list-group>
                </mz-list-item-group>
                <mz-list-item-group title="多层嵌套">
                  <mz-list-item
                    v-for="item of list"
                    :key="item.value"
                    :title="item.title"
                    :value="item.value + 6"
                    :item="item"
                  ></mz-list-item>
                  <mz-list-item-group title="多层嵌套+">
                    <mz-list-item
                      v-for="item of list"
                      :key="item.value"
                      :title="item.title"
                      :value="item.value + 9"
                      :item="item"
                    ></mz-list-item>
                  </mz-list-item-group>
                </mz-list-item-group>
                <mz-list-item
                  v-for="item of list"
                  :key="item.value"
                  :title="item.title"
                  :value="item.value + 12"
                  :item="item"
                ></mz-list-item>
              </mz-list>
            </mz-card>
            <div>{{ value }}</div>
          </div></list-demo8
        ></template
      >
      <template #description></template>
      <template #highlight
        >><pre v-pre><code class="html">&lt;mz-card width=&quot;300px&quot;&gt;
  &lt;mz-list v-model=&quot;value&quot; divider clickable&gt;
    &lt;mz-list-item-group title=&quot;列表组&quot;&gt;
      &lt;mz-list-item v-for=&quot;item of list&quot;
        :key=&quot;item.value&quot;
        :title=&quot;item.title&quot;
        :value=&quot;item.value&quot;
        :item=&quot;item&quot;&gt;&lt;/mz-list-item&gt;
    &lt;/mz-list-item-group&gt;
    &lt;mz-list-item-group title=&quot;列表组2&quot;&gt;
      &lt;mz-list-group label=&quot;标签名称&quot;&gt;
        &lt;mz-list-item v-for=&quot;item of list&quot;
          :key=&quot;item.value&quot;
          :title=&quot;item.title&quot;
          :value=&quot;item.value + 3&quot;
          :item=&quot;item&quot;&gt;&lt;/mz-list-item&gt;
      &lt;/mz-list-group&gt;
    &lt;/mz-list-item-group&gt;
    &lt;mz-list-item-group title=&quot;多层嵌套&quot;&gt;
      &lt;mz-list-item v-for=&quot;item of list&quot;
        :key=&quot;item.value&quot;
        :title=&quot;item.title&quot;
        :value=&quot;item.value + 6&quot;
        :item=&quot;item&quot;&gt;&lt;/mz-list-item&gt;
      &lt;mz-list-item-group title=&quot;多层嵌套+&quot;&gt;
        &lt;mz-list-item v-for=&quot;item of list&quot;
          :key=&quot;item.value&quot;
          :title=&quot;item.title&quot;
          :value=&quot;item.value + 9&quot;
          :item=&quot;item&quot;&gt;&lt;/mz-list-item&gt;
      &lt;/mz-list-item-group&gt;
    &lt;/mz-list-item-group&gt;
    &lt;mz-list-item v-for=&quot;item of list&quot;
      :key=&quot;item.value&quot;
      :title=&quot;item.title&quot;
      :value=&quot;item.value + 12&quot;
      :item=&quot;item&quot;&gt;&lt;/mz-list-item&gt;
  &lt;/mz-list&gt;
&lt;/mz-card&gt;
&lt;div&gt;{{value}}&lt;/div&gt;


&lt;script&gt;
export default {
  data() {
    return {
      value: 10,
      list: [
        { title: '测试 1', value: 1 },
        { title: '测试 2', value: 2 },
        { title: '测试 3', value: 3 }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre></template</template
      ></demo-block
    >
    <h3 id="list-api" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#list-api"
        title="List API"
        data-level="3"
        data-href="#list-api"
        >¶</a
      >List API
    </h3>
    <h4 id="shu-xing" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#shu-xing"
        title="属性"
        data-level="4"
        data-href="#shu-xing"
        >¶</a
      >属性
    </h4>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value/v-model</td>
          <td>绑定值</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>size</td>
          <td>尺寸</td>
          <td>String</td>
          <td>small / medium / large</td>
          <td></td>
        </tr>
        <tr>
          <td>gutter</td>
          <td>列表元素的间隔距离</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>divider</td>
          <td>是否有分割线</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>clickable</td>
          <td>列表元素能否点击</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用状态</td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>width</td>
          <td>宽度</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>min-width</td>
          <td>最小宽度</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>max-width</td>
          <td>最大宽度</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>height</td>
          <td>高度</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>min-height</td>
          <td>最小高度</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>max-height</td>
          <td>最大高度</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ripple</td>
          <td>点击涟漪效果</td>
          <td>Boolean / Object</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4 id="cha-cao" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#cha-cao"
        title="插槽"
        data-level="4"
        data-href="#cha-cao"
        >¶</a
      >插槽
    </h4>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>默认</td>
          <td>列表内容</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4 id="shi-jian" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#shi-jian"
        title="事件"
        data-level="4"
        data-href="#shi-jian"
        >¶</a
      >事件
    </h4>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>选中改变事件</td>
          <td>(value:选中的值,item:元素挂载的item属性)</td>
        </tr>
        <tr>
          <td>item-click</td>
          <td>元素点击事件</td>
          <td>(value:选中的值,item:元素挂载的item属性,disabled:禁用状态)</td>
        </tr>
      </tbody>
    </table>
    <h3 id="listitem-api" class="mz-heading mz-document-heading" data-level="3">
      <a
        class="mz-document-anchor"
        href="#listitem-api"
        title="ListItem API"
        data-level="3"
        data-href="#listitem-api"
        >¶</a
      >ListItem API
    </h3>
    <h4 id="shu-xing-2" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#shu-xing-2"
        title="属性"
        data-level="4"
        data-href="#shu-xing-2"
        >¶</a
      >属性
    </h4>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>元素的值</td>
          <td>any</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>item</td>
          <td>元素携带数据</td>
          <td>any</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>size</td>
          <td>尺寸</td>
          <td>String</td>
          <td>small / medium / large</td>
          <td></td>
        </tr>
        <tr>
          <td>title</td>
          <td>标题</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>text</td>
          <td>文本</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td></td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>clickable</td>
          <td></td>
          <td>Boolean</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>round</td>
          <td></td>
          <td>Boolean/String</td>
          <td>left / right / mini</td>
          <td></td>
        </tr>
        <tr>
          <td>ripple</td>
          <td>点击涟漪效果</td>
          <td>Boolean / Object</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4 id="cha-cao-2" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#cha-cao-2"
        title="插槽"
        data-level="4"
        data-href="#cha-cao-2"
        >¶</a
      >插槽
    </h4>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>默认</td>
          <td>列表元素的内容，完全自定义</td>
          <td></td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>前缀内容</td>
          <td></td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>后缀内容</td>
          <td></td>
        </tr>
        <tr>
          <td>content</td>
          <td>中间内容，<code>title</code>，<code>text</code>所在的整体</td>
          <td></td>
        </tr>
        <tr>
          <td>title</td>
          <td>标题</td>
          <td></td>
        </tr>
        <tr>
          <td>text</td>
          <td>文本</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4 id="shi-jian-2" class="mz-heading mz-document-heading" data-level="4">
      <a
        class="mz-document-anchor"
        href="#shi-jian-2"
        title="事件"
        data-level="4"
        data-href="#shi-jian-2"
        >¶</a
      >事件
    </h4>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击事件</td>
          <td>(e:MouseEvent)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentList',
  components: {
    ListDemo1: {},
    ListDemo2: {},
    ListDemo3: {},
    ListDemo4: {},
    ListDemo5: {},
    ListDemo6: {
      data() {
        return {
          value: '',
          currentItem: {},
          changeItem: {},
          list: [
            { title: '甲', value: 1, disabled: false },
            { title: '乙(禁用)', value: 2, disabled: true },
            { title: '丙', value: 3, disabled: false },
            { title: '丁', value: 4, disabled: false }
          ]
        }
      },
      methods: {
        change(value, item) {
          this.changeItem = item
        },
        itemClick(value, item, disabled) {
          this.currentItem = item
        }
      }
    },
    ListDemo7: {
      data() {
        return {
          sizeList: ['small', 'medium', '', 'large']
        }
      }
    },
    ListDemo8: {
      data() {
        return {
          value: 10,
          list: [
            { title: '测试 1', value: 1 },
            { title: '测试 2', value: 2 },
            { title: '测试 3', value: 3 }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss">
.component-list {
  .list-demo4 {
    .mz-card {
      display: flex;
    }
    .mz-card > span {
      margin: auto;
    }
  }
  .list-demo5 {
    .mz-card {
      display: inline-block;
    }
    .mz-card + .mz-card {
      margin-left: 10px;
    }
  }
  .list-demo6 {
    .mz-card {
      display: flex;
    }
    .mz-card > span {
      margin: auto;
    }
  }
  .list-demo7 {
    .mz-card {
      display: inline-block;
    }
    .mz-card + .mz-card {
      margin-left: 10px;
    }
  }
}
</style>
