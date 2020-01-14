//  heading_open 渲染策略
module.exports = md => {
  const defaultRender = function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    token = tokens[idx]
    token.attrJoin('class', 'mz-header')
    token.attrJoin('class', 'mz-document-header')
    token.attrJoin('data-level', token.tag.replace('h', ''))
    const nextToken = tokens[idx + 1]
    if (nextToken && nextToken.type === 'inline' && nextToken.children) {
      const anchorToken = nextToken.children.find(
        item =>
          item.type === 'link_open' &&
          item.attrGet('class') &&
          item.attrGet('class').includes('mz-document-anchor')
      )
      const textToken = nextToken.children.find(item => item.type === 'text')
      if (textToken) {
        textToken.tag = 'div'
        textToken.attrJoin('class', 'mz-header__title')
        if (anchorToken) {
          anchorToken.attrJoin('title', textToken.content)
          anchorToken.attrJoin('data-level', token.tag.replace('h', ''))
          anchorToken.attrJoin('data-href', anchorToken.attrGet('href'))
        }
      }
    }
    return defaultRender(tokens, idx, options, env, self)
  }

  const defaultTextRender =
    md.renderer.rules.text ||
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }
  md.renderer.rules.text = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (
      token.attrGet('class') &&
      token.attrGet('class').includes('mz-header__title')
    ) {
      return `<div class="mz-header__title">${token.content}</div>`
    }
    return defaultTextRender(tokens, idx, options, env, self)
  }
}
