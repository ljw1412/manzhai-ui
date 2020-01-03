const mdContainer = require('markdown-it-container')

module.exports = md => {
  let i = 0
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      // 截取 :::demo 后的描述文字
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        let description = m && m.length > 1 ? m[1] : ''
        if (description) {
          description = `${md.render(description)}`
        }
        const content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<demo-block class="demo-block-${++i}">
        <template #example><!--example~${content}~example--></template>
        <template #description>${description}</template>
        `
      }
      return '</demo-block>'
    }
  })
  md.use(mdContainer, 'tip')
  md.use(mdContainer, 'warning')
}
