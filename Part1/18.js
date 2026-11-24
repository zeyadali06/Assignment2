const fs = require('node:fs')

function createFile(fileName, content) {
    fs.writeFile(fileName, content, "utf-8", () => { })
}

function readFile(filePath) {
    const readStream = fs.createReadStream(filePath, { highWaterMark: 25, encoding: "utf-8" })

    readStream.on("data", (chunk) => {
        console.log(chunk);
    })

    readStream.on("end", () => {
        console.log("Finished");
    })

    readStream.on("error", (err) => {
        console.log(err);
    })
}

let filePath = "./big.txt"
createFile(filePath, "jidwejdjoeiwjqojowqhorgqrwjidwejdjoeiwjqojowqhorgqrwjidwejdjoeiwjqojowqhorgqrwjidwejdjoeiwjqojowqhorgqrwjidwejdjoeiwjqojowqhorgqrwjidwejdjoeiwjqojowqhorgqrwjidwejdjoeiwjqojowqhorgqrw")
readFile(filePath)
