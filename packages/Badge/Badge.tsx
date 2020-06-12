import Vue from 'vue'
import { extendProps } from 'manzhai-ui/src/utils/vue-helper'
import { CreateElement } from 'vue/types/umd'

function initProps(props: Record<string, any>) {
  const defaultProps = {
    count: 0,
    dot: false,
    overflowCount: 99,
    offset: [0, 0]
  }
  return extendProps(defaultProps, props)
}

function getCount(count: number, overflowCount: number) {
  return count > overflowCount ? `${overflowCount}+` : count
}

function renderBadgeContent(h: CreateElement, props: Record<string, any>) {
  const data = {
    class: [
      'mz-badge__core',
      { 'mz-badge__content': !props.dot, 'mz-badge__dot': props.dot }
    ],
    style: {
      marginTop: `${props.offset[0]}px`,
      marginRight: `${props.offset[0]}px`,
      color: props.textColor,
      backgroundColor: props.color
    }
  }

  const count = getCount(props.count, props.overflowCount)
  return <span {...data}>{!props.dot && count}</span>
}

export default Vue.extend({
  functional: true,
  name: 'MzBadge',
  render(h, ctx) {
    const props = initProps(ctx.props)
    const slot = ctx.slots().default

    return (
      <span class={['mz-badge', { 'mz-badge--alone': !slot }]}>
        {slot}
        {!!props.count && renderBadgeContent(h, props)}
      </span>
    )
  }
})
