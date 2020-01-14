## Heading 标题

有着不同级别的标题。

### 基本用法

标题的基本用法。

:::demo
```html
<mz-heading :level="1">Heading 1</mz-heading>
<mz-heading :level="2">Heading 2</mz-heading>
<mz-heading :level="3">Heading 3</mz-heading>
<mz-heading :level="4">Heading 4</mz-heading>
<mz-heading :level="5">Heading 5</mz-heading>
<mz-heading :level="6">Heading 6</mz-heading>
<mz-heading :level="7">Heading 7</mz-heading>
<mz-heading :level="8">Heading 8</mz-heading>
<mz-heading :level="9">Heading 9</mz-heading>
```
:::

### 锚点标题

带锚点的标题。

:::demo 当`anchor`属性值为 true,会为标题带上锚点，此时 heading 必须有 id。
```html
<mz-heading id="heading-1" :level="1" anchor>Heading 1</mz-heading>
<mz-heading id="heading-2" :level="2" anchor>Heading 2</mz-heading>
<mz-heading id="heading-3" :level="3" anchor>Heading 3</mz-heading>
<mz-heading id="heading-4" :level="4" anchor>Heading 4</mz-heading>
<mz-heading id="heading-5" :level="5" anchor>Heading 5</mz-heading>
<mz-heading id="heading-6" :level="6" anchor>Heading 6</mz-heading>
<mz-heading id="heading-7" :level="7" anchor>Heading 7</mz-heading>
<mz-heading id="heading-8" :level="8" anchor>Heading 8</mz-heading>
<mz-heading id="heading-9" :level="9" anchor>Heading 9</mz-heading>
```
:::