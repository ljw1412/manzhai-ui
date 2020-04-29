function check(token, prevToken, info, nesting, regx) {
  return (
    token.info === info &&
    prevToken &&
    prevToken.nesting === nesting &&
    regx.test(prevToken.info.trim())
  )
}

const renders = {
  getDemoRenderContent: (md, token, prevToken) => {
    if (check(token, prevToken, 'html', 1, /^demo\s*(.*)$/)) {
      const escapeHtmlContent = md.utils.escapeHtml(token.content)
      return `<template #highlight><pre v-pre><code class="html">${escapeHtmlContent}</code></pre></template>`
    }
  },
  getVueRenderContent: (md, token, prevToken) => {
    if (check(token, prevToken, 'html', 1, /^vue\s*(.*)$/)) {
      return ''
    }
  }
}

function getContent(md, token, prevToken) {
  for (const key in renders) {
    const fn = renders[key]
    const content = fn(md, token, prevToken)
    if (content !== undefined) return content
  }
}

// 覆盖默认的 fence 渲染策略
module.exports = md => {
  const defaultRender = md.renderer.rules.fence
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1]
    const content = getContent(md, token, prevToken)
    return content !== undefined
      ? content
      : defaultRender(tokens, idx, options, env, self)
  }
}
