const md = require('./config')
const fs = require('fs').promises
const utils = Object.assign({}, require('./utils'), require('../utils'))

;(async () => {
  const docs = await utils.listFiles('example/docs/*.md')
  console.log('文档列表:', docs)
  const moduleList = []
  await Promise.all(
    docs.map(async path => {
      console.log('读取文档:', path)
      const moduleName = utils.getName(path)
      let doc = md.render(await fs.readFile(path, 'utf-8'))
      let { content, blocks } = utils.extractTemplate(doc, moduleName)
      await utils.generateVueFiles(blocks, moduleName)
      await utils.generateIndexVueFile(moduleName, content, Object.keys(blocks))
      moduleList.push(moduleName)
    })
  )

  await utils.generateRouter(moduleList)
})()
