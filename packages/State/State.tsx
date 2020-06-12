import Vue, { RenderContext } from 'vue'
import { only } from 'manzhai-ui/src/utils/object'

function renderContent(ctx: RenderContext) {
  const value = ctx.props.value
  if (typeof value !== 'string') {
    console.error('[MzState]', 'value 必须是 String 类型')
    return null
  }
  const names = value.replace(/ /g, '').split(',')
  return Object.values(only(ctx.slots(), names))
}

export default Vue.extend({
  functional: true,
  name: 'MzState',
  render(h, ctx) {
    return <div class="mz-state">{renderContent(ctx)}</div>
  }
})
