const utils = require('../utils')
const path = require('path')

const basePath = './example/docs/.temp/'

// 剥离模板
function stripTemplate(content, classes = '') {
  content = content.trim()
  if (!content) return content
  content = content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
  content = content
    .split('\n')
    .map(line => `\t\t${line}`)
    .join('\n')
  return `<template>
  <div class="${classes}">
${content}
  </div>
</template>`
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
  const blocks = {}
  const Regx = /<!--example~[\s\S]+?~example-->/g
  let i = 0
  content = content.replace(Regx, function(match) {
    match = match.replace('<!--example~', '').replace('~example-->', '')
    const name = `${moduleName}Demo${++i}`
    const hyphenateName = utils.hyphenate(name)
    blocks[name] = {
      template: stripTemplate(match, hyphenateName),
      script: stripScript(match),
      style: stripStyle(match)
    }
    return `<${hyphenateName}></${hyphenateName}>`
  })
  content = `<template>
  <div class="${utils.hyphenate(`Component${moduleName}`)}">
    ${content}
  </div>
</template>`
  return { content, blocks }
}

// 字符串扁平化
function pad(source) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
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

// 创建文档DEMO VUE 文件
async function generateVueFiles(block, moduleName) {
  const dirPath = path.join(basePath, moduleName)
  const fileList = Object.keys(block).map(key => {
    return {
      name: `${key}.vue`,
      content: getVueContent(block[key])
    }
  })
  await utils.saveFiles(dirPath, fileList)
}

async function generateIndexVueFile(moduleName, content, componentList) {
  const dirPath = path.join(basePath, moduleName)
  const script = `<script>
${componentList.map(item => `import ${item} from './${item}'`).join('\n')}
export default {
  components: { ${componentList.join(',')} }
}
</script>`
  await utils.saveFiles(dirPath, [
    { name: 'index.vue', content: getVueContent({ template: content, script }) }
  ])
}

// 构建路由
async function generateRouter(moduleList) {
  console.log('正在生成路由中……')
  let content = `${moduleList
    .map(n => `import Component${n} from './${n}/index.vue'`)
    .join('\n')}`
  const routerList = moduleList.map(
    name => `  {
    path: '${utils.hyphenate(name)}',
    name: 'Component${name}',
    component: Component${name}
  }`
  )
  content += `\n\nexport default [\n${routerList.join('\n')}\n]\n`
  await utils.saveFiles(basePath, [{ name: 'router.ts', content }])
}

module.exports = {
  extractTemplate,
  generateVueFiles,
  generateIndexVueFile,
  generateRouter
}
