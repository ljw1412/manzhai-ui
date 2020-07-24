const md = require('../markdown-it/index')
const utils = require('../../utils')
const InlineComponent = require('./InlineComponent')
const DocComponent = require('./DocComponent')

// 字符串扁平化
function pad(source, indent = 2) {
  space = Array.apply(null, { length: indent + 1 }).join(' ')
  return source
    .split(/\r?\n/)
    .map(line => (line !== '\n' || line !== '' ? `${space}${line}` : ''))
    .join('\n')
}

// Markdown解析器
module.exports = class MdParser {
  constructor(file) {
    this.file = file
    this.name = file.type + file.name
    this.doc = md.render(this.file.getContent())
    this.extract()
    this.parse()
  }

  // 剥离模板
  stripTemplate(content, classes = '') {
    content = content.trim()
    if (!content) return content
    content = content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
    content = pad(content)
    return pad(`<div class="${classes}">\n${content}\n</div>`)
  }
  // 剥离js
  stripScript(content) {
    const match = content.match(/<(script)[\s\S]+?<\/\1>/g)
    return match && match[0]
  }
  // 剥离样式
  stripStyle(content) {
    const match = content.match(/<(style)[\s\S]+?<\/\1>/g)
    return match && match[0]
  }

  // 示例提取
  extractExample(name, example, index) {
    const origin = example
    example = example.replace('<!--example~', '').replace('~example-->', '')
    name = utils.hyphenate(name)
    const template = this.stripTemplate(example, name)
    const inlineTemplate = pad(
      `<${name} inline-template>\n${template}\n</${name}>`,
      4
    )

    let script = this.stripScript(example)
    if (script) {
      script = script.substring(
        script.indexOf('{'),
        script.lastIndexOf('}') + 1
      )
    }

    let style = this.stripStyle(example)
    if (style) {
      style = style.substring(style.indexOf('>') + 1, style.lastIndexOf('</'))
    }

    return new InlineComponent(origin, inlineTemplate, script, style)
  }

  // 提取
  extract() {
    const Regx = /<!--example~[\s\S]+?~example-->/g
    const match = this.doc.match(Regx) || []

    let i = 1
    this.inlineTemplateMap = match.reduce((map, str) => {
      const name = `${this.file.name}Demo${i}`
      map[name] = this.extractExample(name, str, i++)
      return map
    }, {})
  }

  // 向文档中注入行内组件
  injectInlineComponent() {
    let doc = this.doc
    Object.values(this.inlineTemplateMap).forEach(demo => {
      if (demo.origin && demo.template) {
        doc = doc.replace(demo.origin, demo.template)
      }
    })
    return doc
  }

  // 构造脚本
  generateScript() {
    const scriptList = Object.keys(this.inlineTemplateMap).map(name => {
      return `${name}: ${this.inlineTemplateMap[name].script || '{}'}`
    })
    return scriptList.join(', ')
  }

  // 构造样式
  generateStyle() {
    const styleList = Object.keys(this.inlineTemplateMap)
      .filter(key => this.inlineTemplateMap[key].style)
      .map(
        name =>
          `.${utils.hyphenate(name)}{${this.inlineTemplateMap[name].style}}`
      )
    return `.${utils.hyphenate(this.name)}{\n${styleList.join('\n')}\n}`
  }

  // 解析
  parse() {
    const template = this.injectInlineComponent().trimEnd()
    const script = this.generateScript()
    const style = this.generateStyle()
    this.docComponent = new DocComponent(this.file, template, script, style)
  }
}
