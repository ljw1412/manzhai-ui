const md = require('./config')
const fs = require('fs').promises
const utils = require('./utils')

;(async () => {
  let doc = md.render(await fs.readFile('example/docs/Button.md', 'utf-8'))

  let { content, block } = utils.extractTemplate(doc)

  Object.keys(block).forEach((key, index) => {
    utils.genInlineComponentText(block[key], `manzhai-demo${index}`)
  })

  content = `<template><div>${content}</div></template>`
  fs.writeFile('./Test.vue', content)
})()
