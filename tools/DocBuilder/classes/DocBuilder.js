const fs = require('fs')
const glob = require('glob')
const path = require('path')
const chalk = require('chalk')
const prettier = require('prettier')
const utils = require('../../utils')
const MdFile = require('./MdFile')
const MdParser = require('./MdParser')
const { diffPath, output } = require('../config')
const { saveFile } = require('../../utils')

module.exports = class DocBuilder {
  constructor(pattern) {
    if (!Array.isArray(pattern) && typeof pattern !== 'string') {
      throw new TypeError(
        '[DocBuilder#constructor] "pattern" not a string or string array!'
      )
    }
    this._pattern = Array.isArray(pattern) ? pattern : [pattern]
    this.initDiff()
    this.iniFileList()
  }

  initDiff() {
    if (!fs.existsSync(diffPath)) {
      fs.writeFileSync(diffPath, '{}')
    }
  }

  iniFileList() {
    const list = []
    this._pattern.forEach(pattern => {
      list.push(...glob.sync(pattern))
    })
    this._fileList = list.map(path => new MdFile(path))
  }

  // 解析markdown文件
  async parseMdFile() {
    // 加载所有markdown文件信息
    await Promise.all(this._fileList.map(async mdFile => await mdFile.load()))
    this.modifiedTypeSet = new Set()
    this._fileList.forEach(file => {
      if (file.modified) this.modifiedTypeSet.add(file.type)
    })
    return this._fileList.map(file => new MdParser(file))
  }

  // 构造路由文件
  async generateRouter(parserList) {
    const routerMap = parserList.reduce((map, parser) => {
      if (!map[parser.file.type]) map[parser.file.type] = []
      map[parser.file.type].push(parser.docComponent.route)
      return map
    }, {})

    for (const type in routerMap) {
      routerMap[type] = prettier.format(
        `export default [\n${routerMap[type].join(',\n')}\n]\n`,
        { parser: 'babel', singleQuote: true, semi: false }
      )
    }

    await utils.saveFiles(
      output,
      Array.from(this.modifiedTypeSet).map(type => ({
        name: `${type}/_router.ts`,
        content: routerMap[type]
      }))
    )
  }

  async build() {
    const diff = require(diffPath)
    const parserList = await this.parseMdFile()
    const modifiedList = parserList.filter(parser => parser.file.modified)
    if (!modifiedList.length) {
      return console.log(chalk.yellow('没有发现被修改文件，生成结束。'))
    }
    await Promise.all(
      modifiedList.map(async ({ file, docComponent }) => {
        const { type, name, path, md5 } = file
        console.log(chalk.yellow('[文档有修改]'), path)
        try {
          const filename = `${type}/${name}.vue`
          const content = docComponent.getContent()
          await saveFile(output, filename, content, true, false)
          diff[path] = md5
        } catch (error) {
          console.error(error)
        }
      })
    )
    console.log('正在更新diff文件')
    fs.writeFileSync(diffPath, JSON.stringify(diff, null, 2))
    utils.logger.success('更新diff文件')

    console.log('正在生成路由中……')
    await this.generateRouter(parserList)
    utils.logger.success('生成路由')

    console.log('生成结束。')
  }
}
