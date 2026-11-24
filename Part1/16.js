const fs = require('node:fs')

function checkExistence(path) {
    return fs.existsSync(path)
}

console.log(checkExistence("./notes.txt"));
