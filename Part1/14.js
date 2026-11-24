const fs = require('node:fs');

let filePath = "./notes.txt"
let content = "This is a note."

function createFile(filePath, content) {
    fs.writeFileSync(filePath, content, "utf-8")
}

createFile(filePath, content)

console.log(fs.readFileSync(filePath, "utf-8"))
