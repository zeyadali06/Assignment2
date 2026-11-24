const fs = require('node:fs')

let srcFilePath = "./source.txt"
let dstFilePath = "./dest.txt"

function createFile(fileName, content) {
    fs.writeFile(fileName, content.repeat(100000), "utf-8", () => { })
}

createFile(srcFilePath, "ejdjoeiwjqojowqhorgqrwjidwejdjoeiwjqojowqhorgqrw")

const readStream = fs.createReadStream(srcFilePath, { highWaterMark: 25, encoding: "utf-8" })
const writeStream = fs.createWriteStream(dstFilePath, { highWaterMark: 25, encoding: "utf-8" })

function copyFile(readStream, writeStream) {
    readStream.pipe(writeStream);

    readStream.on("end", () => {
        console.log("Read Stream Finished");
    })

    writeStream.on("finish", () => {
        console.log("Write Stream Finished");
    })

    readStream.on("error", (err) => {
        console.log(`Read Stream Error: ${err}`);
    })

    writeStream.on("error", (err) => {
        console.log(`Write Stream Error: ${err}`);
    })
}

copyFile(readStream, writeStream)