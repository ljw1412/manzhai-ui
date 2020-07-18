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

function format(content, parser = 'babel') {
  return prettier.format(content, {
    parser,
    singleQuote: true,
    semi: false
  })
}

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
    this._fileList = list.map(path => new MdFile(path, this._diffPath))
    this._parserList = this._fileList.map(file => new MdParser(file))
  }

  generateRouter() {
    const routerList = this._parserList.map(item => item.docComponent.route)
    return format(`export default [\n${routerList.join(',\n')}\n]\n`)
  }

  async build() {
    const diff = require(diffPath)
    const modifiedList = this._parserList.filter(parser => parser.file.modified)
    if (!modifiedList.length) {
      return console.log(chalk.yellow('没有发现被修改文件，生成结束。'))
    }
    await Promise.all(
      modifiedList.map(async ({ file, docComponent }) => {
        const { type, name, path, mtime } = file
        console.log(chalk.yellow('[文档有修改]'), path)
        try {
          const filename = `${type}/${name}.vue`
          const content = format(docComponent.getContent(), 'vue')
          await saveFile(output, filename, content, true, false)
          diff[path] = mtime
        } catch (error) {
          console.error(error)
        }
      })
    )
    console.log('正在更新diff文件')
    fs.writeFileSync(diffPath, JSON.stringify(diff, null, 2))
    utils.logger.success('更新diff文件')

    console.log('正在生成路由中……')
    await utils.saveFiles(output, [
      { name: 'router.ts', content: this.generateRouter() }
    ])
    utils.logger.success('生成路由')

    console.log('生成结束。')
  }
}
