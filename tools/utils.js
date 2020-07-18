const fs = require('fs')
const fsp = require('fs').promises
const crypto = require('crypto')
const path = require('path')
const glob = require('glob')
const chalk = require('chalk')

// 获取文件名
function getName(filePath) {
  return path.parse(filePath).name
}

function getParentName(filePath) {
  return getName(path.dirname(filePath))
}

// 获取文件的 hash
async function getFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(filePath, { encoding: 'utf-8' })
    const hash = crypto.createHash('md5')
    rs.on('data', hash.update.bind(hash))
    rs.on('end', () => {
      resolve(hash.digest('hex'))
    })
    rs.on('error', reject)
  })
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
  return await fsp.readFile(filepath, 'utf-8')
}

/**
 * 文件保存
 * @param {String} dir
 * @param {String} name
 * @param {String} content
 */
async function saveFile(dir, name, content, mkdir = true, silent = true) {
  const filepath = path.join(dir, name)
  if (mkdir) {
    await fsp.mkdir(path.dirname(filepath), { recursive: true })
  }
  await fsp.writeFile(filepath, content)
  if (!silent) console.log(`  写入: ${chalk.blue(path.resolve(filepath))}`)
}

/**
 * 多文件保存
 * @param {String} dir 文件夹路径
 * @param {Array({name,content})} fileList 文件列表
 */
async function saveFiles(dir, fileList) {
  // await fsp.mkdir(dir, { recursive: true })
  await Promise.all(
    fileList.map(async ({ name, content }) => {
      await saveFile(dir, name, content, true, false)
    })
  )
}

// 驼峰转横杠分隔
const hyphenateRE = /\B([A-Z])/g
function hyphenate(str, hyphenate = '-') {
  return str.replace(hyphenateRE, `${hyphenate}$1`).toLowerCase()
}

// 分隔转驼峰
function capitalized(str, lower = false) {
  let first = true
  return str.replace(/\b\w+\b[-_]?/g, function(word) {
    word = word.replace(/[-_]/g, '')
    let initial = word.substring(0, 1).toUpperCase()
    if (lower && first) {
      initial = initial.toLowerCase()
      first = false
    }
    return initial + word.substring(1)
  })
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
  getPathRelative: path.relative,
  getName,
  getParentName,
  getFileHash,
  hyphenate,
  capitalized,
  readFile,
  saveFile,
  saveFiles,
  listFiles,
  logger
}
