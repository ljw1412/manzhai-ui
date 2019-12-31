const md = require('./config')
const fs = require('fs').promises
const utils = require('./utils')

;(async () => {
  const docs = await utils.listMarkdownFiles('example/docs/*.md')
  console.log(docs)
  docs.forEach(async path => {
    const componentName = utils.getName(path)
    let doc = md.render(await fs.readFile(path, 'utf-8'))
    let { content, block } = utils.extractTemplate(doc, componentName)
    await utils.createVueFile(block, componentName)
  })
})()
