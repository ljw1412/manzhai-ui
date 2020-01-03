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
      await utils.generateDocVueFile(moduleName, content, blocks)
      moduleList.push(moduleName)
    })
  )

  await utils.generateRouter(moduleList)
})()

module.exports = function(source) {
  // console.log('!!!!', arguments)
  // utils.saveFiles('/Volumes/HardDisk/ljw/mzui', [
  //   { name: 'test', content: arguments }
  // ])
}
