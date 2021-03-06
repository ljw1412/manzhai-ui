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
  name: 'MzLoading',
  render(h, ctx: RenderContext) {
    const {
      isDirective = false,
      loading = false,
      mode = 1,
      type = 'four-color',
      inline,
      text,
      textColor,
      background
    } = ctx.props
    const slot = ctx.slots().default
    let iconVNode = renderCore(h, type, mode)

    if (slot || isDirective) {
      iconVNode = getLoadingMask(
        h,
        { visible: loading, color: background, absolute: true, zIndex: 500 },
        [
          <div class="absolute-center">
            {iconVNode}
            {text && (
              <div class="mz-loading__text" style={{ color: textColor }}>
                {text}
              </div>
            )}
          </div>
        ] as VNodeChildren
      )
    }

    const data = Object.assign({}, ctx.data, {
      class: [
        'mz-loading',
        {
          'mz-loading--inline': inline,
          'mz-loading--icon': !slot && !isDirective,
          'mz-loading--waiting': loading
        },
        ctx.data.class
      ]
    })

    return (
      <div {...data}>
        {iconVNode}
        {slot && <div class="mz-loading__container">{slot}</div>}
      </div>
    )
  }
})
