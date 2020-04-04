import Vue, { RenderContext, CreateElement, VNodeChildren } from 'vue'
import MzMask from '../Mask/Mask'

// 四色方块
function renderFourColor(h: CreateElement) {
  return [1, 2, 3, 4].map(i => {
    return <i class={['shape', `shape${i}`]}></i>
  })
}

// 加载的核心
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

function getLoadingMask(
  h: CreateElement,
  props: Record<string, any>,
  children: VNodeChildren
) {
  return h(MzMask, { props }, children)
}

export default Vue.extend({
  functional: true,
  render(h, ctx: RenderContext) {
    const {
      mode = 1,
      type = 'four-color',
      loading = false,
      inline,
      tip,
      tipColor,
      maskColor
    } = ctx.props
    const slot = ctx.slots().default
    let iconVNode = renderCore(h, type, mode)

    if (slot) {
      iconVNode = getLoadingMask(
        h,
        { visible: loading, color: maskColor, absolute: true, zIndex: 500 },
        [
          <div class="absolute-center">
            {iconVNode}
            {tip && (
              <div class="mz-loading__text" style={{ color: tipColor }}>
                {tip}
              </div>
            )}
          </div>
        ] as VNodeChildren
      )
    }

    const data = {
      class: [
        'mz-loading',
        {
          'mz-loading--inline': inline,
          'mz-loading--icon': !slot,
          'mz-loading--waiting': loading
        }
      ]
    }
    return (
      <div {...data}>
        {iconVNode}
        {slot && <div class="mz-loading__container">{slot}</div>}
      </div>
    )
  }
})
