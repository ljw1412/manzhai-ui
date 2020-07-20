const fs = require('fs')
const { diffPath } = require('../config')
const utils = require('../../utils')

module.exports = class MdFile {
  constructor(path) {
    this.path = path
  }

  async load() {
    this.md5 = await utils.getFileHash(this.path)
    this.name = utils.getName(this.path)
    this.type = utils
      .capitalized(utils.getParentName(this.path))
      .replace(/s$/, '')
    this.modified = this.isFileChange(this.path, this.md5)
    return this
  }

  isFileChange(fPath, md5) {
    const diff = require(diffPath)
    return !diff[fPath] || diff[fPath] !== md5
  }

  getContent() {
    return fs.readFileSync(this.path, 'utf-8')
  }
}
