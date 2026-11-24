const path = require('node:path')

console.log(fileProp("/home/app/main.js"))

function fileProp(filePath) {
    return { Name: path.parse(filePath).name, Ext: path.parse(filePath).ext }
}