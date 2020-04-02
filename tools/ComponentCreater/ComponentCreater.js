const utils = Object.assign({}, require('./utils'), require('../utils'))
const typeMap = {
  component: {
    dir: '../../example/docs/components',
    name: '组件',
    commands: ['createPackage', 'createDocument', 'injectEntry']
  },
  directive: {
    dir: '../../example/docs/directives',
    name: '指令',
    commands: ['createDocument']
  }
}
const commandSuccessMsg = {
  createPackage: '=== 创建组件包结束 ===\n',
  createDocument: '=== 创建文档文件结束 ===\n',
  injectEntry: '=== 入口注入结束 ===\n'
}

module.exports = class ComponentCreater {
  constructor(name, nameCN, type) {
    this.results = []
    this.name = name
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
      { key: /##name##/g, value: 'Mz' + this.name }
    ]
    const vueStr = await utils.replaceTemplate('vue', replaceList)
    replaceList[1].value = this.name
    const packageEntryStr = await utils.replaceTemplate(
      'packageEntry',
      replaceList
    )
    await utils.saveFiles(`../../packages/${this.name}`, [
      { name: `${this.name}.vue`, content: vueStr },
      { name: 'index.ts', content: packageEntryStr }
    ])
    await utils.saveFile('../../src/styles/components', `${this.name}.scss`, '')
  }

  // 创建文档
  async createDocument() {
    // 新增文档
    await utils.saveFiles(this.options.dir, [
      { name: `${this.name}.md`, content: `## ${this.name} ${this.nameCN}` }
    ])
    // 文档导航栏追加
    const navigateOptions = require('../../example/options/navigate.json')
    let componentGroup = navigateOptions.find(item => item.type === this.type)
    if (!componentGroup) {
      console.log(`[自动新增] navigate.json 中未找到 type:${this.type}。`)
      componentGroup = { type: this.type, children: [] }
      navigateOptions.push(componentGroup)
    }
    const componentChildren = componentGroup.children
    componentChildren.push({
      label: this.name,
      text: this.nameCN,
      to: { name: `${utils.capitalized(this.type)}${this.name}` }
    })
    componentChildren.sort((a, b) => {
      if (a.label > b.label) return 1
      if (a.label < b.label) return -1
      return 0
    })
    await utils.saveFiles(`../../example/options`, [
      {
        name: 'navigate.json',
        content: JSON.stringify(navigateOptions, null, 2)
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
