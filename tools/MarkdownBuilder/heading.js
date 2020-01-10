//  heading_open 渲染策略
module.exports = md => {
  const defaultRender =
    md.renderer.rules.heading ||
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    token = tokens[idx]
    token.attrJoin('class', 'mz-header')
    token.attrJoin('class', 'mz-document-header')
    token.attrJoin('data-level', token.tag.replace('h', ''))
    return defaultRender(tokens, idx, options, env, self)
  }
}
