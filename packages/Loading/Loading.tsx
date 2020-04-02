import Vue, { RenderContext } from 'vue'

function renderFourColor() {
  const list = [1, 2, 3, 4]
  return (
    <div class="mz-loading__content">
      {list.map(item => {
        return <div></div>
      })}
    </div>
  )
}

export default Vue.extend({
  functional: true,
  render(h, ctx) {
    console.log(ctx)
    const slots = ctx.slots().default

    const data = {
      class: ['mz-loading', { 'mz-loading--icon': !slots }]
    }
    return <div {...data}></div>
  }
})
