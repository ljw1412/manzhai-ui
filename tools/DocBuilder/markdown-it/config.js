const slugify = require('transliteration').slugify

module.exports = {
  anchor: {
    level: 2,
    slugify,
    permalink: true,
    permalinkBefore: true,
    permalinkSpace: false,
    permalinkClass: 'mz-document-anchor'
  }
}
