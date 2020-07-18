const fs = require('fs')
const { diffPath } = require('../config')
const utils = require('../../utils')

module.exports = class MdFile {
  constructor(path, diffPath) {
    this.path = path
    this.init()
  }

  init() {
    this.mtime = fs.statSync(this.path).mtimeMs
    this.name = utils.getName(this.path)
    this.type = utils
      .capitalized(utils.getParentName(this.path))
      .replace(/s$/, '')
    this.modified = this.isFileChange(this.path, this.mtime)
  }

  isFileChange(fPath, mtime) {
    const diff = require(diffPath)
    return !diff[fPath] || diff[fPath] !== mtime
  }

  getContent() {
    return fs.readFileSync(this.path, 'utf-8')
  }
}
