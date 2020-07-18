const Chain = require('markdown-it-chain')
const anchor = require('markdown-it-anchor')
const config = require('./config')
const containers = require('./rules/containers')
const rewriteFence = require('./rules/fence')
const rewriteHeading = require('./rules/heading')
const rewriteUl = require('./rules/ul')
const rewriteLink = require('./rules/link')

const chain = new Chain()

chain.options
  .html(true)
  .end()
  .plugin('anchor')
  .use(anchor, [config.anchor])
  .end()
  .plugin('containers')
  .use(containers)
  .end()

const markdown = chain.toMd()
rewriteHeading(markdown)
rewriteFence(markdown)
rewriteUl(markdown)
rewriteLink(markdown)

module.exports = markdown
