const Chain = require('markdown-it-chain')
const anchor = require('markdown-it-anchor')
const containers = require('./containers')
const rewriteFence = require('./fence')

const chain = new Chain()

chain.options
  .html(true)
  .end()
  .plugin('anchor')
  .use(anchor, [{ level: 2, permalink: true, permalinkBefore: true }])
  .end()
  .plugin('containers')
  .use(containers)
  .end()

const markdown = chain.toMd()
rewriteFence(markdown)

module.exports = markdown
