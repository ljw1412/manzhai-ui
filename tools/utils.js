const fs = require('fs').promises
const path = require('path')
const glob = require('glob')
const chalk = require('chalk')

// 获取文件名
function getName(filePath) {
  return path.parse(filePath).name
}

// 根据规则列出文件路径列表
async function listFiles(pattern) {
  return new Promise((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) return reject(err)
      resolve(files)
    })
  })
}

// 读取文件内容
async function readFile(filepath) {
  return await fs.readFile(filepath, 'utf-8')
}

/**
 * 多文件保存
 * @param {String} dir 文件夹路径
 * @param {Array({name,content})} fileList 文件列表
 */
async function saveFiles(dir, fileList) {
  await fs.mkdir(dir, { recursive: true })
  await Promise.all(
    fileList.map(async ({ name, content }) => {
      const filepath = path.join(dir, name)
      await fs.writeFile(filepath, content)
      console.log(`  生成: ${chalk.blue(path.resolve(filepath))}`)
    })
  )
}

// 驼峰转横杠分隔
const hyphenateRE = /\B([A-Z])/g
function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

// 色彩日志输出
const logger = (success, ...args) => {
  logger[success ? 'success' : 'error'](...args)
}
logger.success = (...args) => {
  console.log(chalk.green('[成功]'), ...args)
}
logger.error = (...args) => {
  console.log(chalk.red('[失败]'), ...args)
}

module.exports = {
  getName,
  hyphenate,
  readFile,
  saveFiles,
  listFiles,
  logger
}
