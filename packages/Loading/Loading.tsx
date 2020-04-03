import Vue, { RenderContext, CreateElement } from 'vue'
import MzMask from '../Mask/Mask'

// 四色方块
function renderFourColor(h: CreateElement) {
  return [1, 2, 3, 4].map(i => {
    return <i class={['shape', `shape${i}`]}></i>
  })
}

// 加载的核心
function renderCore(
  h: CreateElement,
  type: string,
  mode: number,
  hasSlot: boolean
) {
  const animation = type + '-' + mode
  return (
    <span class={['mz-loading__core', { 'absolute-center': hasSlot }]}>
      <span class={['mz-loading__icon', type, animation]}>
        {renderFourColor(h)}
      </span>
    </span>
  )
}

export default Vue.extend({
  functional: true,
  render(h, ctx: RenderContext) {
    const { mode = 1, type = 'four-color', loading = false } = ctx.props
    const slot = ctx.slots().default
    let iconVNode = renderCore(h, type, mode, !!slot)

    if (slot) {
      iconVNode = (
        <mz-mask absolute visible={loading} z-index={500}>
          {iconVNode}
        </mz-mask>
      )
    }

    const data = {
      class: ['mz-loading', { 'mz-loading--icon': !slot }]
    }
    return (
      <div {...data}>
        {iconVNode}
        {slot}
      </div>
    )
  }
})
