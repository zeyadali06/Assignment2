const path = require('node:path')

console.log(joinSeg("src", "components", "App.js"));

function joinSeg(...args) {
    return path.join(...args)
}