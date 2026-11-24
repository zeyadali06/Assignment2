const path = require('node:path')

console.log(isAbs("/home/user/file.txt"))

function isAbs(filePath) {
    return path.isAbsolute(filePath)
}