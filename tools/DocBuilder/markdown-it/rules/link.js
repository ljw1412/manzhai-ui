const targetRegx = /^\*\*(.*)\*\*(.*)/

module.exports = md => {
  const defaultRender = function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    token = tokens[idx]
    const href = token.attrGet('href')
    // 匹配 **_blank**http://.....
    if (href && targetRegx.test(href)) {
      const temp = href.match(targetRegx)
      token.attrSet('target', temp[1])
      token.attrSet('href', temp[2])
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}
