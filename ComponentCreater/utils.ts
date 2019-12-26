const fs = require('fs').promises
const chalk = require('chalk')
const path = require('path')

interface ReplaceOptions {
  key: RegExp | string
  value: string
}

async function readFile(filepath: string) {
  return await fs.readFile(filepath, 'utf-8')
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

async function saveFiles(
  dir: string,
  fileList: { name: string; content: string }[]
) {
  await fs.mkdir(dir, { recursive: true })
  await Promise.all(
    fileList.map(async ({ name, content }) => {
      const filepath = path.join(dir, name)
      await fs.writeFile(filepath, content)
      console.log(`  生成: ${chalk.blue(path.resolve(filepath))}`)
    })
  )
}

const hyphenateRE = /\B([A-Z])/g
function hyphenate(str: string) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

const logger = (success: boolean, ...args) => {
  logger[success ? 'success' : 'error'](...args)
}
logger.success = (...args) => {
  console.log(chalk.green('[成功]'), ...args)
}
logger.error = (...args) => {
  console.log(chalk.red('[失败]'), ...args)
}

module.exports = {
  hyphenate,
  replaceTemplate,
  replaceSave,
  readFile,
  saveFiles,
  logger
}
