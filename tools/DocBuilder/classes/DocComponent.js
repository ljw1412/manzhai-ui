const moment = require('moment')
const utils = require('../../utils')

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
    this.template = `<template>
    <div class="${this.hyphenateName}">
      <div class="update-datetime">文档更新时间：${this.datetime}</div>
      ${template}
    </div>
  </template>`
  }

  initScript(script) {
    this.script = `<script>\nexport default {
      name: '${this.name}',
      components: {${script}}}\n</script>`
  }

  initStyle(style) {
    this.style = `<style lang="scss">\n${style}\n</style>`
  }

  initRoute() {
    const filepath = `./${this.file.type}/${this.file.name}.vue`

    this.route = `{
      path: '${this.hyphenateName}',
      name: '${this.name}',
      component: () => import(/* webpackChunkName: "documents" */ '${filepath}')
    }`
  }

  getContent() {
    return `${this.template}\n\n${this.script}\n\n${this.style}\n`
  }
}
