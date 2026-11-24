const fs = require('node:fs')
const path = require('node:path')

createFolder("Folder11")

function createFolder(folderName) {
    fs.mkdir(`${__dirname}\\${folderName}`, (err, path) => {
        err ? console.log(err) : console.log("Success")
    })
}
