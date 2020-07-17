const mdContainer = require('markdown-it-container')

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      // 截取 :::demo 后的描述文字
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        let description = m && m.length > 1 ? m[1] : ''
        if (description.trim()) {
          description = `${md.render(description)}`
        }
        const content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<demo-block>
        <template #example><!--example~${content}~example--></template>
        <template #description>${description}</template>
        `
      }
      return '</demo-block>'
    }
  })

  md.use(mdContainer, 'vue', {
    validate(params) {
      return params.trim().match(/^vue\s*(.*)$/)
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<!--example~${content}~example-->`
      }
      return ''
    }
  })
}
