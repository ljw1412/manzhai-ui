const fs = require('fs').promises
const glob = require('glob')
const path = require('path')

async function listMarkdownFiles(pattern) {
  return new Promise((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) return reject(err)
      resolve(files)
    })
  })
}

// 剥离模板
function stripTemplate(content) {
  content = content.trim()
  return content && content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
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
function extractTemplate(content, componentName) {
  const block = {}
  const Regx = /<!--example~[\s\S]+?~example-->/g
  let i = 0
  content = content.replace(Regx, function(match) {
    match = match.replace('<!--example~', '').replace('~example-->', '')
    const name = `##${componentName}Demo${++i}##`
    block[name] = {
      template: stripTemplate(match),
      script: stripScript(match),
      style: stripStyle(match)
    }
    return name
  })
  return { content, block }
}

// 字符串扁平化
function pad(source) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join('\n')
}

function getName(filePath) {
  return path.parse(filePath).name
}

async function createVueFile(block, componentName) {
  await fs.mkdir(`./.temp/${componentName}`, { recursive: true })
  Object.keys(block).forEach(async key => {})
}

module.exports = { extractTemplate, listMarkdownFiles, createVueFile, getName }
