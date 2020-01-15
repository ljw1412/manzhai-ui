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
      if (textToken && anchorToken) {
        anchorToken.attrJoin('title', textToken.content)
        anchorToken.attrJoin('data-level', token.tag.replace('h', ''))
        anchorToken.attrJoin('data-href', anchorToken.attrGet('href'))
      }
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}
