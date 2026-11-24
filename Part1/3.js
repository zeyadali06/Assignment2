const path = require('node:path')

let pathObj = { dir: "/folder", name: "app", ext: ".js" }

console.log(pathFromObj(pathObj))

function pathFromObj(pathObj) {
    return `${pathObj.dir}/${pathObj.name}${pathObj.ext}`
}
