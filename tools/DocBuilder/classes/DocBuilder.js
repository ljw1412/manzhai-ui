const fs = require('fs')
const glob = require('glob')
const path = require('path')
const utils = require('../../utils')

function isFileChange(fPath, mtime) {
  const diffPath = path.join(__filename, '../../_diff.json')
  if (!fs.existsSync(diffPath)) {
    fs.writeFileSync(diffPath, '{}')
  }
  const diff = require(diffPath)
  return !diff[fPath] && diff[fPath] !== mtime
}

module.exports = class DocBuilder {
  constructor(pattern) {
    if (!Array.isArray(pattern) && typeof pattern !== 'string') {
      throw new TypeError(
        '[DocBuilder#constructor] "pattern" not a string or string array!'
      )
    }
    this._pattern = Array.isArray(pattern) ? pattern : [pattern]
    this.iniFileList()

    console.log(this)
  }

  iniFileList() {
    const list = []
    this._pattern.forEach(pattern => {
      list.push(...glob.sync(pattern))
    })
    this._fileList = list.map(path => {
      const mtime = fs.statSync(path).mtimeMs
      return {
        name: utils.getName(path),
        type: utils.capitalized(utils.getParentName(path)).replace(/s$/, ''),
        path,
        mtime,
        modify: isFileChange(path, mtime)
      }
    })
  }
}
