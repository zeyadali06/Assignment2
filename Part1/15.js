const fs = require('node:fs')

function createFile(fileName, content) {
    fs.writeFile(fileName, content, "utf-8", () => { })
}

createFile("./async.txt", "Async save")