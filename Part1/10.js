const fs = require('node:fs')
const path = require('node:path')

function createFile(fileName) {
    fs.writeFile(fileName, "Created Successfully", (err) => { })
}

function removeFile(filePath) {
    fs.rm(filePath, (err) => {
        err ? console.log(err) : console.log("The file.txt is deleted")
    })
}

let filePath = path.resolve(`${__dirname}/ShouldBeDeleted10.txt`)

createFile(filePath)

setTimeout(() => {
    removeFile(filePath)
}, 3000);