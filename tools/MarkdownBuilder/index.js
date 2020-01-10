const md = require('./config')
const chalk = require('chalk')
const utils = Object.assign({}, require('./utils'), require('../utils'))

;(async () => {
  const docs = await utils.listFiles('example/docs/*.md')
  // console.log('文档列表:', docs)
  const moduleList = []
  const HashChangeMap = {}
  await Promise.all(
    docs.map(async path => {
      const moduleName = utils.getName(path)
      const hash = await utils.getFileHash(path)
      if (utils.isFileChange(path, hash)) {
        HashChangeMap[path] = hash
        console.log(chalk.yellow('[文档有修改]'), path)
        let doc = md.render(await utils.readFile(path))
        let { content, blocks } = utils.extractTemplate(doc, moduleName)
        await utils.generateDocVueFile(moduleName, content, blocks)
      }
      moduleList.push(moduleName)
    })
  )
  await utils.updateHash(HashChangeMap)
  await utils.generateRouter(moduleList.sort())
})()
