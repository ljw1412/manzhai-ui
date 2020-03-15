const utils = require('../utils')
const path = require('path')
const moment = require('moment')
const basePath = './example/docs/.auto/'

// 剥离模板
function stripTemplate(content, classes = '') {
  content = content.trim()
  if (!content) return content
  content = content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
  content = pad(content)
  return `<div class="${classes}">
${content}
</div>`
}

// 剥离样式
function stripStyle(content) {
  const match = content.match(/<(style)[\s\S]+?<\/\1>/g)
  return match && match[0]
}

// 剥离js
function stripScript(content) {
  const match = content.match(/<(script)[\s\S]+?<\/\1>/g)
  return match && match[0]
}

// 提取示例
function extractTemplate(content, moduleName) {
  const blocks = []
  const Regx = /<!--example~[\s\S]+?~example-->/g
  let i = 0
  content = content.replace(Regx, function(match) {
    match = match.replace('<!--example~', '').replace('~example-->', '')
    const name = `${moduleName}Demo${++i}`
    const hyphenateName = utils.hyphenate(name)
    let script = stripScript(match)
    if (script) {
      script = script.substring(
        script.indexOf('{'),
        script.lastIndexOf('}') + 1
      )
    }
    let style = stripStyle(match)
    if (style) {
      style = style.substring(style.indexOf('>') + 1, style.lastIndexOf('</'))
    }
    blocks.push({ name, hyphenateName, script, style })
    return `<${hyphenateName} inline-template>${stripTemplate(match, hyphenateName)}</${hyphenateName}>`
  })
  const datetime = moment().format('YYYY-MM-DD HH:mm')
  content = `<template>
  <div class="${utils.hyphenate(`Component${moduleName}`)}">
    <div class="update-datetime">文档更新时间：${datetime}</div>
    ${content}
  </div>
</template>`
  return { content, blocks }
}

// 字符串扁平化
function pad(source) {
  return source
    .split(/\r?\n/)
    .map(line => (line !== '\n' || line !== '' ? `  ${line}` : ''))
    .join('\n')
}

const vueBlockKeys = ['template', 'script', 'style']
function getVueContent(vueBlock) {
  let contentList = []
  vueBlockKeys.forEach(key => {
    if (vueBlock[key]) contentList.push(vueBlock[key])
  })
  return contentList.join('\n')
}

async function generateDocVueFile(moduleName, content, blocks) {
  // script 组装
  const componentScriptList = blocks.map(
    item => `${item.name}: ${item.script || '{}'}`
  )
  const script = `<script>
export default {
  name: 'Component${moduleName}',
  components: { ${componentScriptList.join(', ')} }
}
</script>`
  // style 组装
  const componentStyleList = blocks
    .filter(item => item.style)
    .map(item => `.${item.hyphenateName}{${pad(item.style)}}`)
  const style = `<style lang="scss">
${componentStyleList.join('\n')}
</style>`

  await utils.saveFiles(basePath, [
    {
      name: `${moduleName}.vue`,
      content: getVueContent({ template: content, script, style })
    }
  ])
}

async function generateDocVue(moduleName, content, blocks) {
  const componentList = blocks.map(
    item => `${item.name}: ${item.script || '{}'}`
  )
  const script = `<script>
  export default {
    components: { ${componentList.join(', ')} }
  }
  </script>`

  return getVueContent({ template: content, script })
}

// 构建路由
async function generateRouter(moduleList) {
  console.log('正在生成路由中……')
  let content = `${moduleList
    .map(({ name, type }) => `import ${type}${name} from './${name}.vue'`)
    .join('\n')}`
  const routerList = moduleList.map(
    ({ name, type }) => `  {
    path: '${utils.hyphenate(name)}',
    name: '${type}${name}',
    component: ${type}${name}
  }`
  )
  content += `\n\nexport default [\n${routerList.join(',\n')}\n]\n`
  await utils.saveFiles(basePath, [{ name: 'router.ts', content }])
}

/**
 * 是否文件 hash 变化
 * @param {String} key
 * @param {String} hash
 */
function isFileChange(key, hash) {
  const hashMap = require('./!hash.json')
  return !hashMap[key] || hashMap[key] !== hash
}

/**
 * 更新hash文件
 */
async function updateHash(hashChangeMap = {}) {
  const hashMap = require('./!hash.json')
  const keys = Object.keys(hashChangeMap)
  if (!keys.length) return
  keys.forEach(key => {
    hashMap[key] = hashChangeMap[key]
  })
  const hashJson = JSON.stringify(hashMap, null, 2)
  await utils.saveFile('./tools/MarkdownBuilder', '!hash.json', hashJson)
  utils.logger.success('更新hash文件')
}

module.exports = {
  extractTemplate,
  generateDocVueFile,
  generateDocVue,
  generateRouter,
  isFileChange,
  updateHash
}
