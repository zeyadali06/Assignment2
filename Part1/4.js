const path = require('node:path')

console.log(ext("/docs/readme.md"))

function ext(filePath) {
    return path.extname(filePath)
}