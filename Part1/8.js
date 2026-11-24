const path = require('node:path')

console.log(pathToAbs("./index.js"));

function pathToAbs(relativePath) {
    return path.resolve(relativePath)
}