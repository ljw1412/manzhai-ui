const md = require('./config')
const utils = Object.assign({}, require('./utils'), require('../utils'))

;(async () => {
  const docs = await utils.listFiles('example/docs/*.md')
  console.log('文档列表:', docs)
  const moduleList = []
  await Promise.all(
    docs.map(async path => {
      const moduleName = utils.getName(path)
      const hash = await utils.getFileHash(path)
      if (await utils.isFileChange(path, hash)) {
        console.log('读取文档:', path)
        let doc = md.render(await utils.readFile(path))
        let { content, blocks } = utils.extractTemplate(doc, moduleName)
        await utils.generateDocVueFile(moduleName, content, blocks)
      } else {
        console.log('[文档未修改]', moduleName)
      }
      moduleList.push(moduleName)
    })
  )

  await utils.generateRouter(moduleList.sort())
})()

module.exports = function(source) {
  // console.log('!!!!', arguments)
  // utils.saveFiles('/Volumes/HardDisk/ljw/mzui', [
  //   { name: 'test', content: arguments }
  // ])
}
