const utils = require('./utils')

module.exports = class ComponentCreater {
  // 模块名称 大驼峰
  name: string
  nameCN: string
  results = []

  constructor(name: string, nameCN: string) {
    this.name = name
    this.nameCN = nameCN
    this.run()
  }

  async run() {
    console.log(`开始创建组件 - ${this.name}`)
    console.log('1. 创建组件包')
    this.results[0] = await this.try(this.createPackage)
    utils.logger(this.results[0], '=== 创建组件包结束 ===\n')
    console.log('2. 创建文档文件')
    this.results[1] = await this.try(this.createExample)
    utils.logger(this.results[1], '=== 创建文档文件结束 ===\n')
    console.log('3. 入口注入')
    this.results[2] = await this.try(this.injectEntry)
    utils.logger(this.results[2], '=== 入口注入结束 ===\n')
  }

  async try(fn: Function) {
    try {
      await fn.call(this)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  // 创建组件包
  async createPackage() {
    const replaceList = [
      { key: /##hyphenatename##/g, value: 'mz-' + utils.hyphenate(this.name) },
      { key: /##name##/g, value: this.name },
      { key: /##scoped##/g, value: '' }
    ]
    const vueStr = await utils.replaceTemplate('vue', replaceList)
    const packageEntryStr = await utils.replaceTemplate(
      'packageEntry',
      replaceList
    )
    await utils.saveFiles(`../../packages/${this.name}`, [
      { name: `${this.name}.vue`, content: vueStr },
      { name: 'index.ts', content: packageEntryStr }
    ])
  }

  async createExample() {
    const name = `Component${this.name}`
    const replaceList = [
      { key: /##hyphenatename##/g, value: utils.hyphenate(name) },
      { key: /##name##/g, value: name },
      { key: /##scoped##/g, value: 'scoped' }
    ]
    const vueStr = await utils.replaceTemplate('vue', replaceList)
    await utils.saveFiles(`../../example/views/Component`, [
      { name: `${this.name}.vue`, content: vueStr }
    ])
    // 路由追加
    utils.replaceSave('../../example/router.ts', [
      {
        key: /\/\/ inject router/g,
        value: `// inject router\n        {
          path: '${utils.hyphenate(this.name)}',
          name: '${name}',
          component: ${name}
        },`
      },
      {
        key: /\/\/ inject import/g,
        value: `// inject import\nimport ${name} from './views/Component/${this.name}.vue'`
      }
    ])
    // 文档导航栏追加
    const navigateOptions = require('../../example/options/navigate.json')
    const componentChildren = navigateOptions[0].children
    componentChildren.push({
      label: this.name,
      text: this.nameCN,
      to: { name }
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
