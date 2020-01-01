const fs = require('fs').promises
const path = require('path')
const { readFile } = require('../utils')

interface ReplaceOptions {
  key: RegExp | string
  value: string
}

async function replaceTemplate(filename: string, replace: ReplaceOptions[]) {
  let template = await fs.readFile(`./templates/${filename}`, 'utf-8')
  replace.forEach(({ key, value }) => {
    template = template.replace(key, value)
  })
  return template
}

async function replaceSave(filepath: string, replace: ReplaceOptions[]) {
  let content = await readFile(filepath)
  replace.forEach(({ key, value }) => {
    content = content.replace(key, value)
  })
  await fs.writeFile(filepath, content)
}

module.exports = {
  replaceTemplate,
  replaceSave
}
