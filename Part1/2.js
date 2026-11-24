const path = require('node:path')

console.log(fileName("/user/files/report.pdf"))

function fileName(filePath) {
    return path.basename(filePath)
}