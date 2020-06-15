const fs = require('fs')
const path = require('path')

const filepath = path.resolve(__dirname, '../src/global.d.ts')
const outputPath = path.resolve(__dirname, '../types/global.d.ts')

const content = fs.readFileSync(filepath, { encoding: 'utf-8' })

fs.writeFileSync(outputPath, content.replace(/manzhai-ui\//g, './'))
