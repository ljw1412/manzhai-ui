const prettier = require('prettier')
const moment = require('moment')
const utils = require('../../utils')

function format(content, parser = 'babel') {
  return prettier.format(content, {
    parser,
    singleQuote: true,
    semi: false
  })
}

module.exports = class DocComponent {
  constructor(file, template, script, style) {
    this.datetime = moment().format('YYYY-MM-DD HH:mm')
    this.file = file
    this.name = file.type + file.name
    this.hyphenateName = utils.hyphenate(this.name)
    this.initTemplate(template)
    this.initScript(script)
    this.initStyle(style)
    this.initRoute()
  }

  initTemplate(template) {
    this.template = [
      '<template>',
      `  <div class="${this.hyphenateName}">`,
      `    <div class="update-datetime">文档更新时间：${this.datetime}</div>`,
      template,
      '  </div>',
      '</template>'
    ].join('\n')
  }

  initScript(script) {
    script = format(
      `export default {name: '${this.name}',components: {${script}}}`
    )
    this.script = `<script>\n${script}</script>\n`
  }

  initStyle(style) {
    style = format(style, 'scss')
    this.style = `<style lang="scss">\n${style}</style>`
  }

  initRoute() {
    const filepath = `./${this.file.name}.vue`
    const chunkName = utils.hyphenate(this.file.type)
    this.route = `{
      path: '${this.hyphenateName}',
      name: '${this.name}',
      component: () => import(/* webpackChunkName: "${chunkName}" */ '${filepath}')
    }`
  }

  getContent() {
    return `${this.template}\n\n${this.script}\n\n${this.style}\n`
  }
}
