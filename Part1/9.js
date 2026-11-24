const path = require('node:path')

console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

function joinTwoPaths(firstPath, secPath) {
    return path.join(firstPath, secPath)
}