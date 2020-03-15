const fs = require('fs').promises
const path = require('path')
const { readFile } = require('../utils')

async function replaceTemplate(filename, replace) {
  let template = await fs.readFile(`./templates/${filename}`, 'utf-8')
  replace.forEach(({ key, value }) => {
    template = template.replace(key, value)
  })
  return template
}

async function replaceSave(filepath, replace) {
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
