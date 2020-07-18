module.exports = md => {
  const defaultRender = function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }
  md.renderer.rules.bullet_list_open = (tokens, idx, options, env, self) => {
    token = tokens[idx]
    token.attrJoin('class', 'mz-document-ul')
    return defaultRender(tokens, idx, options, env, self)
  }
}
