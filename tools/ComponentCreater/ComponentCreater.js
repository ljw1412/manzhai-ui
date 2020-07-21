const utils = Object.assign({}, require('./utils'), require('../utils'))
const typeMap = {
  component: {
    dir: '../../example/docs/components',
    name: '组件',
    commands: ['createPackage', 'createStyle', 'createDocument', 'injectEntry']
  },
  directive: {
    dir: '../../example/docs/directives',
    name: '指令',
    commands: ['createDocument']
  },
  style: {
    dir: '../../example/docs/styles',
    name: '样式',
    commands: ['createDocument']
  }
}
const commandSuccessMsg = {
  createPackage: '=== 创建组件包结束 ===\n',
  createStyle: '=== 创建组件样式文件结束 ===\n',
  createDocument: '=== 创建文档文件结束 ===\n',
  injectEntry: '=== 入口注入结束 ===\n'
}
const optionsDir = '../../example/options'

module.exports = class ComponentCreater {
  constructor(name, lang, nameCN, type) {
    this.name = name
    this.lang = lang
    this.nameCN = nameCN
    this.type = type
    this.run()
  }

  async run() {
    this.options = typeMap[this.type]
    if (!this.options) {
      return utils.logger.error(`类型:${this.type}的指令不存在！`)
    }
    console.log(`开始创建${this.options.name} - ${this.name}`)
    this.options.commands.forEach(async command => {
      await this.try(this[command], commandSuccessMsg[command])
    })
  }

  async try(fn, successMsg) {
    try {
      await fn.call(this)
      utils.logger.success(successMsg)
      return true
    } catch (error) {
      utils.logger.error(error)
      return false
    }
  }

  // 创建组件包
  async createPackage() {
    const replaceList = [
      { key: /##hyphenatename##/g, value: 'mz-' + utils.hyphenate(this.name) },
      { key: /##name##/g, value: 'Mz' + this.name },
      {
        key: /##filename##/g,
        value: this.lang === 'tsx' ? this.name : `${this.name}.${this.lang}`
      }
    ]
    const replaceTemplate = async name => {
      return await utils.replaceTemplate(name, replaceList)
    }
    const vueStr = await replaceTemplate(this.lang)
    replaceList[1].value = this.name
    const packageEntryStr = await replaceTemplate('packageEntry')
    await utils.saveFiles(`../../packages/${this.name}`, [
      { name: `${this.name}.${this.lang}`, content: vueStr },
      { name: 'index.ts', content: packageEntryStr }
    ])
  }

  // 创建组件样式
  async createStyle() {
    const stylesDir = '../../src/styles/components'
    await utils.saveFile(stylesDir, `${this.name}.scss`, '')
    const styleFiles = await utils.listFiles(`${stylesDir}/!(index).scss`)
    const scssImportContent =
      styleFiles
        .map(path => `@import './${utils.getPathRelative(stylesDir, path)}';`)
        .join('\n') + '\n'
    await utils.saveFile(stylesDir, 'index.scss', scssImportContent)
  }

  // 创建文档
  async createDocument() {
    const { name, nameCN, type, options } = this
    // 新增文档
    await utils.saveFiles(this.options.dir, [
      { name: `${name}.md`, content: `## ${name} ${nameCN}` }
    ])
    // 文档导航栏追加
    const navigatePath = `${optionsDir}/navigate/${type}.json`
    const isExists = utils.isFileExists(navigatePath)

    const componentGroup = isExists
      ? require(navigatePath)
      : { group: options.name, type: type, children: [] }
    if (!Array.isArray(componentGroup.children)) componentGroup.children = []
    componentGroup.children.push({
      title: name,
      text: nameCN,
      to: { name: `${utils.capitalized(type)}${name}` }
    })
    componentGroup.children.sort((a, b) => {
      if (a.title > b.title) return 1
      if (a.title < b.title) return -1
      return 0
    })
    await utils.saveFiles(optionsDir, [
      {
        name: `navigate/${type}.json`,
        content: JSON.stringify(componentGroup, null, 2)
      }
    ])
  }

  // 入口注入
  async injectEntry() {
    utils.replaceSave('../../src/index.ts', [
      {
        key: /\/\/ inject import/g,
        value: `// inject import\nimport ${this.name} form '../packages/${this.name}/index'`
      },
      {
        key: /\/\/ inject component/g,
        value: `// inject component\n  ${this.name},`
      }
    ])
    let entry = await utils.readFile('../../src/index.ts')
    entry = entry
      .replace(
        /\/\/ inject import/g,
        `// inject import\nimport ${this.name} from '../packages/${this.name}/index'`
      )
      .replace(/\/\/ inject component/g, `// inject component\n  ${this.name},`)
    await utils.saveFiles(`../../src`, [{ name: 'index.ts', content: entry }])
  }
}
