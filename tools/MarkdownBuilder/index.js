const md = require('./config')
const chalk = require('chalk')
const utils = Object.assign({}, require('./utils'), require('../utils'))

;(async () => {
  const docs = await utils.listFiles('example/docs/**/*.md')
  // console.log('文档列表:', docs)
  const moduleList = []
  const HashChangeMap = {}
  await Promise.all(
    docs.map(async path => {
      const name = utils.getName(path)
      const type = utils
        .capitalized(utils.getParentName(path))
        .replace(/s$/, '')
      const hash = await utils.getFileHash(path)
      if (utils.isFileChange(path, hash)) {
        HashChangeMap[path] = hash
        console.log(chalk.yellow('[文档有修改]'), path)
        let doc = md.render(await utils.readFile(path))
        let { content, blocks } = utils.extractTemplate(doc, name)
        await utils.generateDocVueFile(type + name, content, blocks)
      }
      moduleList.push({ name, type })
    })
  )
  await utils.updateHash(HashChangeMap)
  await utils.generateRouter(
    moduleList.sort((a, b) =>
      a.type === b.type ? (a.name > b.name ? 1 : -1) : a.type > b.type ? 1 : -1
    )
  )
})()
