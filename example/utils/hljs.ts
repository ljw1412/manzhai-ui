const hljs = require('highlight.js/lib/core.js')
const xml = require('highlight.js/lib/languages/xml')
const css = require('highlight.js/lib/languages/css')
const javascript = require('highlight.js/lib/languages/javascript')
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)

export default hljs
