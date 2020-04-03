import Vue, { RenderContext, CreateElement } from 'vue'

// 四色方块
function renderFourColor(h: CreateElement) {
  return [1, 2, 3, 4].map(i => {
    return <i class={['shape', `shape${i}`]}></i>
  })
}

function renderCore(h: CreateElement, type: string, mode: number) {
  const animation = type + '-' + mode
  return (
    <span class="mz-loading__core">
      <span class={['mz-loading__icon', type, animation]}>
        {renderFourColor(h)}
      </span>
    </span>
  )
}

export default Vue.extend({
  functional: true,
  render(h, ctx: RenderContext) {
    const { mode = 1, type = 'four-color' } = ctx.props
    const iconVNode = renderCore(h, type, mode)

    const slot = ctx.slots().default
    const data = {
      class: ['mz-loading', { 'mz-loading--icon': !slot }]
    }
    return <div {...data}>{iconVNode}</div>
  }
})
